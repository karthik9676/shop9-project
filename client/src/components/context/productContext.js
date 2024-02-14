import { createContext, useContext, useEffect, useReducer } from "react";
import axios from 'axios';
import reducer from "../reducer/productReducer";

const AppContext = createContext();

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: {}
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
   

    // func for getting all products
    const getProducts = async () => { 
        //const url = "https://api.pujakaitem.com/api/products";

        const url = "http://localhost:7000/api/product/products";

        dispatch({ type: "SET_LOADING" });
        try {
            const res = await axios.get(url);
            //  console.log(res.data.products)
            const products = res.data.products;
            // console.log(products)
            dispatch({ type: "SET_API_DATA", payload: products });
        } catch (error) {
            console.log(error);
            dispatch({ type: "SET_SINGLE_ERROR" });
        }
    };

    // func for getting single product
    const getSingleProduct = async (url) => {
      dispatch({ type: "SET_SINGLE_LOADING" });
      try {
        const res = await axios.get(url);
        //  console.log(res.data)
        const singleProduct = res.data.product;
        //    console.log(singleProduct)
          dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
      } catch (error) {
          console.log(error);
          dispatch({ type: "SET_SINGLE_ERROR" });
      }
    };

    useEffect(() => { 
        getProducts();
    }, []);

  return <AppContext.Provider value={ {...state, getSingleProduct} }>{children}</AppContext.Provider>;
};

// Custom Hook
const useProductContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider, useProductContext };