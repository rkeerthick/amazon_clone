import { actions } from "./Actions";

export const initialState = {
  basket: [],
};

export const getStateTotal = (basket) => {
  let cur = 0;
  for(let i in basket) {
    cur += basket[i].price;
  }
  return cur;
}

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actions.addToBasket:
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;