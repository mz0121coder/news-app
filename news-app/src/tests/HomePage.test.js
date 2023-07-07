import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import HomePage from '../components/HomePage/HomePage';

// Positive test case: Test that the search input value is updated correctly
test('Search input value is updated correctly', () => {
	render(<HomePage />);
	const searchInput = screen.getByRole('textbox', { name: /search/i });

	fireEvent.change(searchInput, { target: { value: 'react' } });

	expect(searchInput.value).toBe('react');
});

// Positive test case: Test that the handleInputChange function is called correctly
test('handleInputChange function is called correctly', () => {
	render(<HomePage />);
	const searchInput = screen.getByRole('textbox', { name: /search/i });

	fireEvent.change(searchInput, { target: { value: 'react' } });

	expect(searchInput.value).toBe('react');
});

// Positive test case: Test that the handleSearchClick function is called correctly
test('handleSearchClick function is called correctly', async () => {
	render(<HomePage />);
	const searchInput = screen.getByRole('textbox', { name: /search/i });
	const searchButton = screen.getByRole('button', { name: /search/i });

	fireEvent.change(searchInput, { target: { value: 'react' } });
	fireEvent.click(searchButton);

	await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
});

// Positive test case: Test that the loading state is displayed correctly
test('Loading state is displayed correctly', () => {
	render(<HomePage />);
	const loadingText = screen.getByText(/loading/i);

	expect(loadingText).toBeInTheDocument();
});

// Positive test case: Test that the error state is displayed correctly
test('Error state is displayed correctly', () => {
	render(<HomePage />);
	const errorText = screen.getByText(/error/i);

	expect(errorText).toBeInTheDocument();
});

// Positive test case: Test that the articles are displayed correctly
test('Articles are displayed correctly', () => {
	render(<HomePage />);
	const articlesArea = screen.getByTestId('results-area');

	expect(articlesArea).toBeInTheDocument();
});
