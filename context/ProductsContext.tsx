import { IOption } from "@/components/Dropdown";
import useProducts from "@/hooks/useProducts";
import productsReducer from "@/reducer/productsReducer";
import { getAllProducts } from "@/services/products";
import React, { useCallback, useContext, useEffect, useReducer } from "react";

const initialState = {
  loading: true,
  error: "",
  products: [],
  filteredProducts: [],
  filteredSortedProducts: [],
  searchTerm: "",
  sortValue: "",
};

const ProductsContext = React.createContext();

export function ProductsProvider({ children }) {
  const [state, dispatch] = useReducer(productsReducer, initialState);

  const fetchProducts = useCallback(async () => {
    try {
      dispatch({ type: "UPDATE_LOADING_STATE", payload: true });
      const products = await getAllProducts();
      dispatch({ type: "LOAD_PRODUCTS", payload: products });
    } catch (e) {
      dispatch({ type: "UPDATE_ERROR_MSG", payload: e });
    } finally {
      dispatch({ type: "UPDATE_LOADING_STATE", payload: false });
    }
  }, []);

  const filterProducts = useCallback((searchTerm: string) => {
    dispatch({ type: "FILTER_PRODUCTS", payload: searchTerm });
  }, []);

  const sortProducts = useCallback((option: IOption) => {
    dispatch({ type: "SORT_PRODUCTS", payload: option });
  }, []);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        filterProducts,
        sortProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export const useProductsContext = () => useContext(ProductsContext);
