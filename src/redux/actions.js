import * as actionTypes from "./actionTypes";

export const increaseQuantity = (id) => {
  return {
    type: actionTypes.INCREASE_QTY,
    payload: {
      id: id,
    },
  };
};

export const decreaseQuantity = (id) => {
  return {
    type: actionTypes.DECREASE_QTY,
    payload: {
      id: id,
    },
  };
};

export const deleteItem = (id) => {
  return {
    type: actionTypes.DELETE_ITEM,
    payload: {
      id: id,
    },
  };
};

export const fetchStore = () => {
  return {
    type: actionTypes.FETCH_STORE,
  }
}

