import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Hydrate (optional - used with redux-persist or next-redux-wrapper)
    hydrate: (state, action) => {
      if (action.payload.cart) {
        return {
          ...state,
          items: action.payload.cart.items,
        };
      }
      return state;
    },

    // Add item to cart
    addToCart: (state, action) => {
      const index = state.items.findIndex(
        (cartItem) => cartItem._id === action.payload._id
      );

      if (index >= 0) {
        state.items[index].qty += 1;
      } else {
        const item = { ...action.payload };
        delete item.toast; // remove UI-only props before storing
        state.items.push({ ...item, qty: 1 });
      }
    },

    // Update quantity of a cart item
    updateQty: (state, action) => {
      const index = state.items.findIndex(
        (cartItem) => cartItem._id === action.payload._id
      );

      if (index >= 0) {
        if (action.payload.qty >= 1) {
          state.items[index] = {
            ...state.items[index],
            qty: action.payload.qty,
          };
        } else {
          state.items.splice(index, 1); // remove if qty < 1
        }
      } else {
        console.warn("Product not found in cart");
      }
    },

    // Remove item from cart
    removeFromCart: (state, action) => {
      const index = state.items.findIndex(
        (cartItem) => cartItem._id === action.payload._id
      );

      if (index >= 0) {
        state.items.splice(index, 1);
      } else {
        console.warn(`Can't remove product (_id:${action.payload._id}) — not found in cart.`);
        console.log(action.payload._id)
      }
    },

    // Empty the cart
    emptyCart: (state) => {
      state.items = [];
    },
  },
});

// Export actions
export const { addToCart, removeFromCart, updateQty, hydrate, emptyCart } =
  cartSlice.actions;

// Selectors
export const selectItems = (state) => state.cart.items;
export const selectTotal = (state) =>
  state.cart.items.reduce((total, item) => total + item.price * item.qty, 0);

// Export reducer
export default cartSlice.reducer;
