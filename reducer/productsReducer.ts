import { sortOptions } from "@/constants/sortOptions";

const sortProducts = (products, value) => {
  const sortedData = [...products];
  if (value === sortOptions["By AlbumID Asc"]) {
    sortedData.sort((a, b) => {
      return a.albumId - b.albumId;
    });
  }
  if (value === sortOptions["By AlbumID Desc"]) {
    sortedData.sort((a, b) => {
      return b.albumId - a.albumId;
    });
  }
  return sortedData;
};

const productsReducer = (state, action) => {
  const { type, payload } = action;
  if (type === "UPDATE_LOADING_STATE") {
    return { ...state, loading: payload };
  }
  if (type === "UPDATE_ERROR_MSG") {
    return { ...state, error: payload };
  }
  if (type === "LOAD_PRODUCTS") {
    return {
      ...state,
      products: payload,
      filteredProducts: payload,
      filteredSortedProducts: payload,
    };
  }
  if (type === "FILTER_PRODUCTS") {
    const searchTerm = payload;
    const filteredProducts = state.products.filter(({ title }) =>
      title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return {
      ...state,
      filteredProducts: filteredProducts,
      filteredSortedProducts: sortProducts(filteredProducts, state.sortValue),
    };
  }
  if (type === "SORT_PRODUCTS") {
    const option = payload;
    return {
      ...state,
      sortValue: option.value,
      filteredSortedProducts: sortProducts(
        state.filteredProducts,
        option.value
      ),
    };
  }

  throw new Error(`No Matching "${type}" - action type`);
};

export default productsReducer;
