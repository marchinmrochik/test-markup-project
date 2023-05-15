import { configureStore } from '@reduxjs/toolkit'
import cardsReducer from './reducers/cardsReducer';
import thunk from 'redux-thunk';

export const store = configureStore({
    reducer: {
        cards: cardsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
