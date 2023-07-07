import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "../reducers/Theme/ThemeSlice";

export default configureStore({
    reducer: {
        theme: themeSlice
    },
})
