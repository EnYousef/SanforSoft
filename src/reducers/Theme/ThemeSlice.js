import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        value: localStorage.theme !== null ? localStorage.theme : 'light',
    },
    reducers: {
        setLightTheme: (state) => {
            state.value = 'light';
            document.documentElement.classList.add('light');
            localStorage.theme = 'light'
            document.body.className = "light"
        },
        setDarkTheme: (state) => {
            state.value = 'dark';
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'dark';
            document.body.className = "dark"
        }
    },
})

export const { setLightTheme, setDarkTheme } = themeSlice.actions
export const selectTheme = (state) => state.theme.value;
export default themeSlice.reducer
