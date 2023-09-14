import { IProduct } from './../../types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IFavorites {
    favorites: IProduct[];
}

const initialState: IFavorites = {
    favorites: [],
}

export const favoriteSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addItemToFavorites(state, action: PayloadAction<IProduct>) {
            const { id } = action.payload;
            const existFavorite = state.favorites.find((item) => item.id === id);

            if (existFavorite) {
                if (existFavorite.quantity !== undefined) {
                    existFavorite.quantity += 1;
                } else {
                    existFavorite.quantity = 1; // Установка начального значения quantity
                }
            } else {
                state.favorites.push({ ...action.payload, quantity: 1 });
            }
        },
        removeItemFromFavorites(state, action: PayloadAction<number>) {
            const itemId = action.payload
            state.favorites = state.favorites.filter((item) => item.id !== itemId)
        }
    }
})

export const { addItemToFavorites, removeItemFromFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer;