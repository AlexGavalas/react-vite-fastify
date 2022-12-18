import { FC, useState } from 'react';

import { darkThemeClass, lightThemeClass } from '../styles/themes.module.css';
import * as styles from './app.module.css';
import { Button } from '../button';

export const App: FC = () => {
    const [theme, setTheme] = useState<'dark' | 'light'>('dark');
    const [variant, setVariant] = useState<'default' | 'invert'>('default');

    const themeClass = theme === 'dark' ? darkThemeClass : lightThemeClass;

    const toggleTheme = () => (theme === 'dark' ? setTheme('light') : setTheme('dark'));

    const toggleVariant = () =>
        variant === 'default' ? setVariant('invert') : setVariant('default');

    return (
        <main className={[themeClass, styles.wrapper].join(' ')}>
            <div className={styles.bar}>
                <div className={styles.topBarHeading[theme]}>Theme is {theme}</div>
                <Button onClick={toggleTheme}>Toggle Theme</Button>
                <Button onClick={toggleVariant}>Toggle Variant</Button>
            </div>
        </main>
    );
};
