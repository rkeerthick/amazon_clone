import { actions } from "./Actions";

export const initialState = {
  basket: [],
};

export const getStateTotal = (basket) => {
  let cur = 0;
  for (let i in basket) {
    cur += basket[i].price;
  }
  return cur;
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.addToBasket:
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    case actions.removeFromBasket:
      return {
        ...state,
        basket: state.basket.filter((item) => item.itemId !== action.id),
      };
    default:
      return state;
  }
};

export default reducer;
