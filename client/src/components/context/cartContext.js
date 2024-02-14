import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer";
import Cookies from "js-cookie";

const CartContext = createContext();

const getCookieData = () => {
  let newData = Cookies.get("shopCart");
  //  console.log(newData)
  if (newData === undefined) {
    return [];
  } else {
    return JSON.parse(newData);
  }
};


const initialState = {
    cart: getCookieData(),
    total_item: "",
    total_price: 0,
    shipping_fee: 30
};

const CartContextProvider = ({ children }) => {
    // useReducer hook
    const [state, dispatch] = useReducer(reducer, initialState);

    // dispatch 
    const addToCart = (id, color, amount, product) => {
        // console.log(id, color,amount, product )
        dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
    };

    // removing individual product from cart
    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id });
    };
    // console.log(state.cart);

    // to clear the products from cart
    const clearCart = () => { 
        dispatch({ type: "CLEAR_CART" });
    };

    // increment and decrement
    const setDecrease = (id) => { 
        dispatch({ type: "SET_DECREMENT", payload: id });
    };
    const setIncrease = (id) => { 
        dispatch({ type: "SET_INCREMENT", payload: id });
    };

    // to add data in cookies
  useEffect(() => { 
        dispatch({ type: "CART_TOTAL_ITEM" });
        dispatch({ type: "CART_TOTAL_PRICE" });
        Cookies.set("shopCart", JSON.stringify(state.cart));
    }, [state.cart]);

    // console.log(Cookies.get("shopCart"))


    return (
      <CartContext.Provider
        value={{
          ...state,
          addToCart,
          removeItem,
          clearCart,
          setDecrease,
          setIncrease,
        }}
      >
        {children}
      </CartContext.Provider>
    );
};

// custom hook
const useCartContext = () => {
    return useContext(CartContext);
}

export { CartContext, CartContextProvider, useCartContext };