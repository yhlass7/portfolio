import {createSlice} from "@reduxjs/toolkit";

const initialState: {
    isDarkMode: boolean;
} = {
    isDarkMode: false,
}
export const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState,
    reducers: {
        toggleDarkMode: (state) => {
            state.isDarkMode = !state.isDarkMode;
        },
        setDarkMode: (state, action) => {
            state.isDarkMode = action.payload;
        },
    },
});

export const {toggleDarkMode, setDarkMode} = darkModeSlice.actions;
export default darkModeSlice.reducer;