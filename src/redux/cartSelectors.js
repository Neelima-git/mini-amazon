import { createSelector } from "reselect";

// Select the cart state from the Redux store
const selectCart = (state) => state.cart;

// Select the products array from the cart state
export const selectCartProducts = createSelector(
  [selectCart],
  (cart) => cart.products
);

// Select the number of products in the cart
export const selectCartProductsNumber = createSelector(
  [selectCart],
  (cart) => cart.productsNumber
);

// Select the subtotal by calculating it from the products array
export const selectCartSubTotal = createSelector(
  [selectCartProducts],
  (products) =>
    products.reduce(
      (subTotal, product) => subTotal + product.price * product.quantity,
      0
    )
);
