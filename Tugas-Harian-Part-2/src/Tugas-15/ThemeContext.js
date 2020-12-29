import React, {useState, createContext} from "react";

export const ThemeContext = createContext()

export const ThemeProvider = props => {
	const [theme, setTheme] = useState('-light')
	const [mode, setMode] = useState('Off')

	return(
		<ThemeContext.Provider value={[theme, setTheme,mode, setMode]}>
			{props.children}
		</ThemeContext.Provider>
		)
}