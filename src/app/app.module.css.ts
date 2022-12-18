import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../styles/themes.module.css';

export const wrapper = style({
    fontFamily: vars.font.body,
    backgroundColor: vars.colors.background,
    color: vars.colors.body,
    height: '100%',
    display: 'grid',
    placeContent: 'center',
    fontSize: vars.fontSize.md,
});

export const bar = style({
    display: 'flex',
    gap: vars.space.md,
});

const topBarHeadingBase = style({
    fontSize: vars.fontSize.lg,
    fontWeight: 700,
});

export const topBarHeading = styleVariants({
    light: [topBarHeadingBase, { color: 'black' }],
    dark: [topBarHeadingBase, { color: 'white' }],
});
