import React, { createContext, useState } from 'react';

export const initialState = {
	theme: true,
	handleChangeTheme: (theme: boolean) => {},
};

export const AppThemeContext = createContext(initialState);

export const ThemeWrapper = (props: any) => {
	let [theme, setTheme] = useState<boolean>(false);

	const handleChangeTheme = (theme: boolean) => {
		setTheme(theme);
	};

	const contextProps = { theme, handleChangeTheme };

	return (
		<AppThemeContext.Provider value={contextProps}>
			{props.children}
		</AppThemeContext.Provider>
	);
};
