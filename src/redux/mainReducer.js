import * as actionTypes from "./actionTypes";
import myInitialState from "./initialState";
const initialState = myInitialState;

const mainReducer = (state = initialState, action) => {
  const item = action.payload
    ? state.products.find((item) => item.id === action.payload.id)
    : {};
  switch (action.type) {
    case actionTypes.INCREASE_QTY:
      return {
        products: state.products.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        }),
        cart: {
          ...state.cart,
          items: state.cart.items + 1,
          price: state.cart.price + item.price,
          discount: state.cart.discount + item.discount,
          typeDiscount:
            item.type === "fiction"
              ? state.cart.typeDiscount + (item.price * 15) / 100
              : state.cart.typeDiscount,
        },
      };
    case actionTypes.DECREASE_QTY:
      return {
        products: state.products.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
          return item;
        }),
        cart: {
          ...state.cart,
          items: state.cart.items - 1,
          price: state.cart.price - item.price,
          discount: state.cart.discount - item.discount,
          typeDiscount:
            item.type === "fiction"
              ? state.cart.typeDiscount - (item.price * 15) / 100
              : state.cart.typeDiscount,
        },
      };
    case actionTypes.DELETE_ITEM:
      return {
        products: state.products.filter(
          (item) => item.id !== action.payload.id
        ),
        cart: {
          ...state.cart,
          items: state.cart.items - item.quantity,
          price: state.cart.price - item.price * item.quantity,
          discount: state.cart.discount - item.discount * item.quantity,
          typeDiscount:
            item.type === "fiction"
              ? state.cart.typeDiscount -
                (item.quantity * item.price * 15) / 100
              : state.cart.typeDiscount,
        },
      };

    case actionTypes.FETCH_STORE:
      return {
        products: myInitialState.products,
        cart: myInitialState.cart
      }
    default:
      return state;
  }
};

export default mainReducer;
