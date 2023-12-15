import toolkit from '@reduxjs/toolkit';

const { configureStore, createAction, createReducer } = toolkit;

const addToCart = createAction('ADD_TO_CART');

const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
  });
});

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
console.log('onchange store: ', store.getState());

store.subscribe(() => {
  console.log('STORE CHANGE: ', store.getState());
});

// const action1 = addToCart({ id: 2, qty: 20 });
// store.dispatch(action1);
store.dispatch(addToCart({ id: 2, qty: 20 }));
