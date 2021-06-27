import React from 'react';
import { ThemeProvider } from '@emotion/react';

import { ThemeContext } from './theme.context';
import { getAppTheme } from './theme';

export const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = React.useState<'light' | 'dark'>('light');

    // TODO: запрос темы с бэка

    const handleThemeChange = () => {
        setTheme((prevTheme) => {
            if (prevTheme === 'light') {
                return 'dark';
            }

            return 'light';
        });
    };

    return (
        <ThemeContext.Provider
            value={{
                mode: theme,
                handleThemeChange
            }}
        >
            <ThemeProvider theme={getAppTheme(theme)}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};
