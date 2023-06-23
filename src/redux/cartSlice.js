import { createSlice } from "@reduxjs/toolkit";

const intialState = {
    products: [],
    productsNumber: 0
}

export const cartSlice = createSlice({
    name: "cart",
    intialState,
    reducers: {
        addToCart: (state, action) => {

        },
        removeFromCart: (state, action) => {
            
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer