import { IOption } from "@/components/Dropdown";
import productsReducer from "@/reducer/productsReducer";
import { getAllProducts } from "@/services/products";
import { ProductType } from "@/types/products";
import React, { useCallback, useContext, useReducer } from "react";

interface IContextVariables {
  loading: boolean;
  error: string;
  products: ProductType[];
  filteredProducts: ProductType[];
  filteredSortedProducts: ProductType[];
  searchTerm: string;
  sortValue: string;
  totalProductsCount: number;
  page: number;
  hasMoreData: boolean;
}

interface IContextmethods {
  fetchProducts: (page: number) => void;
  filterProducts: (searchTerm: string) => void;
  sortProducts: (value: IOption["value"]) => void;
}

export type IProductContext = IContextVariables & IContextmethods;

const initialState = {
  loading: true,
  error: "",
  products: [],
  filteredProducts: [],
  filteredSortedProducts: [],
  searchTerm: "",
  sortValue: "",
  totalProductsCount: 5000,
  page: 0,
  hasMoreData: true,
  fetchProducts: (page: number) => {},
  filterProducts: (searchTerm: string) => {},
  sortProducts: (value: IOption["value"]) => {},
};

const ProductsContext = React.createContext<IProductContext>(initialState);

export function ProductsProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(productsReducer, initialState);

  const fetchProducts = useCallback(async (page: number) => {
    const limit = 20;
    const startPosition = page * limit;
    try {
      dispatch({ type: "UPDATE_LOADING_STATE", payload: true });
      const products = await getAllProducts(startPosition);
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

  const sortProducts = useCallback((value: IOption["value"]) => {
    dispatch({ type: "SORT_PRODUCTS", payload: value });
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        filterProducts,
        sortProducts,
        fetchProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export const useProductsContext = () => useContext(ProductsContext);
