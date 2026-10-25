// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ChainQuartz title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ChainQuartz/i);
    expect(titleElement).toBeInTheDocument();
});
