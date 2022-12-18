import { createThemeContract, createTheme } from '@vanilla-extract/css';

const SYSTEM_FONT_STACK =
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

export const colors = {
    black: '#000000',
    white: '#ffffff',
    lightBlue: '#a3aadb',
    gray: '#111827',
    red: '#7f1d1d',
    green: '#14532d',
    blue: '#1e3a8a',
};

export const breakpoints = {
    mobile: 0,
    tablet: 768,
    desktop: 1200,
};

export const vars = createThemeContract({
    colors: {
        primary: '',
        body: '',
        background: '',
        link: '',
        linkHover: '',
        ...colors,
    },
    font: {
        body: '',
    },
    fontSize: {
        xs: '',
        sm: '',
        md: '',
        lg: '',
        xl: '',
    },
    space: {
        xs: '',
        sm: '',
        md: '',
        lg: '',
        xl: '',
    },
    radii: {
        sm: '',
        md: '',
        full: '',
    },
});

const commonVars = {
    font: {
        body: SYSTEM_FONT_STACK,
    },
    space: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2.5rem',
    },
    fontSize: {
        xs: '0.8rem',
        sm: '0.875rem',
        md: '1rem',
        lg: '1.25rem',
        xl: '1.5rem',
    },
    radii: {
        sm: '0.2rem',
        md: '0.4rem',
        full: '100%',
    },
};

export const lightThemeClass = createTheme(vars, {
    colors: {
        primary: colors.blue,
        body: colors.gray,
        background: colors.white,
        link: colors.black,
        linkHover: colors.blue,
        ...colors,
    },
    ...commonVars,
});

export const darkThemeClass = createTheme(vars, {
    colors: {
        primary: colors.white,
        body: colors.gray,
        background: colors.gray,
        link: colors.white,
        linkHover: colors.lightBlue,
        ...colors,
    },
    ...commonVars,
});
