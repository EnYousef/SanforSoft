import { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import {
    setDarkTheme,
    setLightTheme,
    selectTheme
} from './ThemeSlice.js'
import { useDispatch, useSelector } from "react-redux";

export function ThemeButton() {
    let themeVal = useSelector(selectTheme);
    const dispatch = useDispatch();
    const [theme, setTheme] = useState(themeVal);
    const changeTheme = () => {
        if (theme === 'dark') {
            setTheme('light');
            dispatch(setLightTheme());
        } else {
            setTheme('dark');
            dispatch(setDarkTheme())
        }
    }
    return <button
        onClick={() => changeTheme()}
        className={`flex p-1 border rounded-3xl items-center bg-slate-100 dark:bg-gray-900 dark:border-gray-600 shadow-inner dark:shadow-gray-700 w-16 ${theme === 'dark' ? 'justify-end' : 'justify-start dark:bg-black'}`}
    >
        {theme === 'light' ? <MdDarkMode /> : <MdLightMode />}
    </button>
}
