import { createSlice } from "@reduxjs/toolkit"

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
      count: 0,
      inputValue: '',
      errorMessage: null,
    },
    reducers: {
      increment: (state, action) => {
        state.count += action.payload;
      },
      decrement: (state, action) => {
        if (state.count >= action.payload) {
          state.count -= action.payload;
        } else {
          state.count = 0;
        }
      },
      setInputValue: (state, action) => {
        state.inputValue = action.payload;
      },
      setErrorMessage: (state, action) => {
        state.errorMessage = action.payload;
      },
      clearErrorMessage: (state) => {
        state.errorMessage = null;
      }
    },
});

export const { increment, decrement, setInputValue, clearErrorMessage, setErrorMessage } = counterSlice.actions;