

const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
      let { id, color, amount, product } = action.payload;
      // console.log(id, color, amount, product)
      // dealing with existing product
      let existingProduct = state.cart.find((item) => item.id === id + color);
      // console.log(existingProduct)

      if (existingProduct) {
        let updatedProduct = state.cart.map((item) => {
          if (item.id === id + color) {
              let newAmount = item.amount + amount;
              if (newAmount >= item.max) {
                  newAmount = item.max;
              }
            return {
              ...item,
              amount: newAmount,
            };
          } else {
            return item;
          }
        });
        return {
          ...state,
          cart: updatedProduct,
        };
      } else {
        let cartProduct;
        cartProduct = {
          id: id + color,
          name: product.name,
          color: color,
          amount: amount,
          image: product.images[0].url,
          price: product.price,
          max: product.stock,
        };
        return {
          ...state,
          cart: [...state.cart, cartProduct],
        };
      }
    }

    if (action.type === "REMOVE_ITEM") {
        let updatedCart = state.cart.filter((item) => item.id !== action.payload)
        return {
            ...state,
            cart: updatedCart
        };
    }

    if (action.type === "CLEAR_CART") {
        return {
            ...state,
            cart:[]
        }
    }

    // to set increment and decrement
    if (action.type === "SET_DECREMENT") {
        let updatedProduct = state.cart.map((item) => {
            if (item.id === action.payload) {
              let decAmount = item.amount - 1;
              if (decAmount <= 1) {
                decAmount = 1;
              }
                return {
                    ...item,
                    amount: decAmount
                };
            }
            else {
                return item;
            }
        });
      return {
        ...state,
        cart:updatedProduct
      };
  }
  
  if (action.type === "SET_INCREMENT") {
    let updatedProduct = state.cart.map((item) => {
        if (item.id === action.payload) {
          let incAmount = item.amount + 1;
          if (incAmount >=  item.max) {
            incAmount = item.max;
          }
            return {
                ...item,
                amount: incAmount
            };
        }
        else {
            return item;
        }
    });
  return {
    ...state,
    cart:updatedProduct
  };
  }
  
  if (action.type === "CART_TOTAL_ITEM") {
    let updatedItemVal = state.cart.reduce((initialVal, curEle) => { 
      let { amount } = curEle;
      initialVal = initialVal + amount;
      return initialVal;
    }, 0);
    return {
      ...state,
      total_item: updatedItemVal
    };
  }

  if (action.type === "CART_TOTAL_PRICE") {
    let total_price = state.cart.reduce((initialVal, curEle) => {
      let { price, amount } = curEle;
      initialVal = initialVal + (price * amount);
      return initialVal;
    }, 0);
    return {
      ...state,
      total_price: total_price
    };
  }

    return state;
}

export default cartReducer;
