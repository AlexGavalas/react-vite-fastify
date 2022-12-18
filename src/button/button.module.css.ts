import { style } from '@vanilla-extract/css';
import { vars } from '../styles/themes.module.css';

export const button = style({
    background: 'none',
    color: vars.colors.link,
    border: '1px solid',
    transition: 'all .25s ease-in-out',
    borderRadius: vars.radii.sm,
    paddingLeft: vars.space.sm,
    paddingRight: vars.space.sm,
    selectors: {
        '&:hover': {
            color: vars.colors.linkHover,
            borderColor: vars.colors.linkHover,
        },
    },
});
