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
    const products = [...state.products, ...payload];
    const filteredProducts = products.filter(({ title }) =>
      title.toLowerCase().includes(state.searchTerm.toLowerCase())
    );
    return {
      ...state,
      products,
      filteredProducts: filteredProducts,
      filteredSortedProducts: sortProducts(filteredProducts, state.sortValue),
      hasMoreData: products.length < state.totalProductsCount,
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
      searchTerm,
    };
  }
  if (type === "SORT_PRODUCTS") {
    const value = payload;
    return {
      ...state,
      sortValue: value,
      filteredSortedProducts: sortProducts(state.filteredProducts, value),
    };
  }

  throw new Error(`No Matching "${type}" - action type`);
};

export default productsReducer;
