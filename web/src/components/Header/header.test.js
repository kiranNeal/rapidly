import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Header from './index.js';

describe('Header component tests', () => {
    afterEach(cleanup);

    it('Header renders as expected', () => {
        const { asFragment } = render(<Header />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('Header renders Title correctly', () => {
        const { getByText } = render(<Header />);
        const linkElement = getByText('RAPIDLY');
        expect(linkElement).toBeInTheDocument();
    });
});



