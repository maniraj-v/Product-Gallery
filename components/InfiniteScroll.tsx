import { MutableRefObject, ReactNode, useEffect, useRef } from "react";

interface InfiniteScrollProps {
  className: string;
  fetchData: any;
  data: any[];
  loader: ReactNode;
  renderItem: (item: any, index: number, ref: any) => ReactNode;
  hasMoreData: boolean;
  loading: boolean;
}

const InfiniteScroll = ({
  className = "",
  fetchData,
  data,
  loader = <p>Loading...</p>,
  renderItem,
  hasMoreData,
  loading,
}: InfiniteScrollProps) => {
  const pageRef = useRef(0);
  const mountedRef = useRef(false);
  const observer = useRef<IntersectionObserver | null>(null);

  const getData = async () => {
    try {
      await fetchData(pageRef.current);
    } catch (e) {
      Promise.reject(e);
    }
  };

  const lastElementRef = (node: any) => {
    if (loading || !hasMoreData) {
      return;
    }
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log("last element found");
        pageRef.current += 1;
        getData();
      }
    });

    if (node) observer.current.observe(node);
  };

  useEffect(() => {
    if (mountedRef.current === false) {
      getData();
      mountedRef.current = true;
    }
  }, []);

  return (
    <ul className={className}>
      {data.map((item, index) => {
        if (index === data.length - 1) {
          return renderItem(item, index, lastElementRef);
        }
        return renderItem(item, index, null);
      })}
      {loading && <>{loader}</>}
      {!hasMoreData && <div>End of Data</div>}
    </ul>
  );
};
export default InfiniteScroll;
