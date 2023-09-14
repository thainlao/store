import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from './reducers/CorzState';
import favoriteReducer from './reducers/Favorites';

export const rootReducer = combineReducers({
    cartReducer, favoriteReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch'];