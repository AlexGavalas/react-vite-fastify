import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from './button';

describe('Button', () => {
    test('Renders correctly', () => {
        const { getByText } = render(<Button>Test</Button>);

        expect(getByText('Test')).toBeDefined();
    });

    test('Click handler gets called', async () => {
        const handler = jest.fn();

        const { getByText } = render(<Button onClick={handler}>Test</Button>);

        await userEvent.click(getByText('Test'));

        expect(handler).toHaveBeenCalledTimes(1);
    });
});
