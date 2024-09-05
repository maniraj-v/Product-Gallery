const CardSkeleton = () => {
  return (
    <div className="max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 py-6 px-4">
          <div className="h-32 bg-gray-200 rounded w-full mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
