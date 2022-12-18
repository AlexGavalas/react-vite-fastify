import type { FC } from 'react';

import sprite from './sprite.svg';

// Icon ids
const icons = ['icon-1', 'icon-2'];

const Icon: FC<{ id: string }> = ({ id, ...props }) => (
    <svg {...props}>
        <use href={`${sprite}#${id}`} />
    </svg>
);

export const Icons = () => {
    return icons.map((id) => <Icon key={id} id={id} />);
};
