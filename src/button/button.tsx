import { FC, ButtonHTMLAttributes } from 'react';

import * as styles from './button.module.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({ children, ...rest }) => {
    return (
        <button className={styles.button} {...rest}>
            {children}
        </button>
    );
};
