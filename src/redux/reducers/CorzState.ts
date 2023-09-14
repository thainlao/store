import { createSlice,PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../../types/types';

export interface ICartItem extends IProduct {
    quantity: number;
}

const initialState: ICartItem[] = [];

export const corzSlice = createSlice({
    name: 'corzina',
    initialState,
    reducers: {
        addItemToCard(state, action: PayloadAction<IProduct>) {
            const { id } = action.payload;
            const existItem = state.find(item => item.id === id);

            if (existItem) {
                existItem.quantity += 1;
            } else {
                state.push({ ...action.payload, quantity: 1 })
            }
        },
        removeItemFromCard(state, action: PayloadAction<number>) {
            return state.filter(item => item.id !== action.payload)
        },
        clearCart(state) {
            state.length = 0;
        }
    }
})

export const { addItemToCard, removeItemFromCard, clearCart} = corzSlice.actions;
export default corzSlice.reducer;