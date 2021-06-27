const theme = {
    light: {
        mainBg: '#3f51b5',
        wrapperBg: '#fff',
        textPrimary: '#000',
        divider: 'rgba(0, 0, 0, 0.12)',
        borderBottom: 'rgba(0, 0, 0, 0.42)',
        inputLabel: 'rgba(0, 0, 0, 0.54)',
        drawerBg: '#fff',
        svgColor: 'rgba(0, 0, 0, 0.54)',
        itemHover: 'rgba(0, 0, 0, 0.04)'
    },
    dark: {
        mainBg: '#303030',
        wrapperBg: '#1f1d1d',
        textPrimary: '#fff',
        divider: 'rgba(255, 255, 255, 0.2)',
        borderBottom: 'rgba(255, 255, 255, 0.2)',
        inputLabel: 'rgba(255, 255, 255, 0.54)',
        drawerBg: '#303030',
        svgColor: '#fff',
        itemHover: 'rgba(255, 255, 255, 0.2)'
    }
};

export const getAppTheme = (mode: 'light' | 'dark') => ({
    ...theme[mode]
});

export type ThemeTypes = {
    // нам нет разницы light или dark, свойства будут одинаковыми
    theme?: typeof theme.light
};
