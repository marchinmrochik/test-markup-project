import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {createAsyncThunk} from "@reduxjs/toolkit";
import {getCards} from "services/api";
import {KEYS_TO_CHECK, PAGE_SIZE_ELEMENTS, STORAGE_KEY} from "services/constants";
import {checkObjectEquality, splitArray} from "services/utils";
import {Card} from "services/types";

export const fetchCards = createAsyncThunk('cards/fetchCards', async () => {
    try {
        return await getCards();
    } catch (error: any) {
        throw new Error(error.message);
    }
});

interface Pagination {
    currentPage: number;
    totalPages: number;
}

interface CardsState {
    cards: Card[];
    showCards: Card[];
    loading: boolean;
    error: string | null;
    pagination: Pagination
}

const initialState: CardsState = localStorage.getItem(STORAGE_KEY) ? JSON.parse(<string>localStorage.getItem(STORAGE_KEY)) : {
    cards: [],
    showCards: [],
    loading: false,
    error: null,
    pagination: {
        currentPage: 1,
        totalPages: 0,
    }
};

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        onPageChange: (state, action: PayloadAction<number>) => {
            if (state.pagination.currentPage < state.pagination.totalPages || state.pagination.currentPage > 1) {
                state.pagination.currentPage = action.payload;
                state.showCards = splitArray(state.cards, PAGE_SIZE_ELEMENTS, state.pagination.currentPage);
            }
        },
        toggleLike: (state, action: PayloadAction<{ cardId: string; like: boolean }>) => {
            const {cardId, like} = action.payload;
            const card = state.cards.find((card) => card.id === cardId);

            if (card) card.like = like;

            state.showCards = splitArray(state.cards, PAGE_SIZE_ELEMENTS, state.pagination.currentPage)

            localStorage.setItem(STORAGE_KEY, JSON.stringify({
                ...state, pagination: {
                    currentPage: 1,
                    totalPages: 0,
                }
            }));
        },
        searchCards: (state, action: PayloadAction<string>) => {
            const searchQuery = action.payload.toLowerCase();
            const matchedCards: Card[] = [];

            state.cards.forEach((card) => {
                const {title, description} = card;
                const isMatch = title.toLowerCase().includes(searchQuery) || description.toLowerCase().includes(searchQuery);

                if (isMatch) {
                    matchedCards.push(card);
                }
            });
            state.pagination.totalPages = Math.ceil(matchedCards.length / PAGE_SIZE_ELEMENTS);
            state.pagination.currentPage = state.pagination.currentPage > state.pagination.totalPages ? 1 : state.pagination.currentPage;
            state.showCards = splitArray(matchedCards, PAGE_SIZE_ELEMENTS, state.pagination.currentPage);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCards.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCards.fulfilled, (state, action: PayloadAction<Card[]>) => {
                const getLocalDataCards = localStorage.getItem(STORAGE_KEY);
                state.loading = false;

                if(!getLocalDataCards) {
                    state.cards = action.payload.map((card) => ({
                        ...card,
                        like: false
                    }));
                } else {
                    if(!checkObjectEquality(JSON.parse(getLocalDataCards).cards, action.payload, KEYS_TO_CHECK)) {
                        state.cards = action.payload.map((card) => ({
                            ...card,
                            like: false
                        }));
                    }
                }

                state.pagination.totalPages = Math.ceil(state.cards.length / PAGE_SIZE_ELEMENTS);
                state.showCards = splitArray(state.cards, PAGE_SIZE_ELEMENTS, state.pagination.currentPage)
            })
            .addCase(fetchCards.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Something went wrong';
            });
    },
});

export const {onPageChange, toggleLike, searchCards} = cardsSlice.actions;


export default cardsSlice.reducer;
