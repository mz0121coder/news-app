import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
	test('renders search bar with input and button', () => {
		render(<SearchBar />);

		// Find the input element by its placeholder text
		const inputElement = screen.getByPlaceholderText('Search for news');
		// Find the button element by its role and name
		const buttonElement = screen.getByRole('button', { name: 'Submit' });

		// Assert that the input and button elements are in the document
		expect(inputElement).toBeInTheDocument();
		expect(buttonElement).toBeInTheDocument();
	});

	test('updates search query when input value changes', () => {
		render(<SearchBar />);

		// Find the input element by its placeholder text
		const inputElement = screen.getByPlaceholderText('Search for news');

		// Simulate a change event on the input element with a new value
		fireEvent.change(inputElement, { target: { value: 'test' } });

		// Assert that the input value has been updated
		expect(inputElement.value).toBe('test');
	});

	test('calls handleSearchClick function when button is clicked', () => {
		// Create a mock function for handleSearchClick
		const handleSearchClick = jest.fn();
		render(<SearchBar handleSearchClick={handleSearchClick} />);

		// Find the button element by its role and name
		const buttonElement = screen.getByRole('button', { name: 'Submit' });

		// Simulate a click event on the button element
		fireEvent.click(buttonElement);

		// Assert that handleSearchClick has been called once
		expect(handleSearchClick).toHaveBeenCalledTimes(1);
	});
});
