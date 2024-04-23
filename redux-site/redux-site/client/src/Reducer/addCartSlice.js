import { createSlice } from "@reduxjs/toolkit";

export const addCartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addCart(state, action) {
            let index = state.findIndex(x => x.id == action.payload.id)
            if (index >= 0) {
                state[index].qty += 1;
            }
            else {
                const temp = { ...action.payload, qty: 1 }
                state.push(temp)
            }
        },
        decItem(state, action) {
            let index = state.findIndex(x => x.id == action.payload.id)
            if (state[index].qty >= 1) {
                state[index].qty -= 1;
            }
        },
        deleteCart(state, action) {
            let index = state.findIndex(x => x.id == action.payload)
            state.splice(index, 1)
        },
        deleteAllCart(state, action) {
            return []
        }

    }
})
export const { addCart, deleteCart, deleteAllCart, decItem } = addCartSlice.actions