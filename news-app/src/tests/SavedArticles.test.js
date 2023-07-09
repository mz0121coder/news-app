import SavedArticles from '../components/SavedArticles/SavedArticles';
import { render, screen } from '@testing-library/react';
describe('SavedArticles', () => {
	test('renders the page heading correctly', () => {
		render(<SavedArticles />);
		const headingElement = screen.getByText('Saved Articles');
		expect(headingElement).toBeInTheDocument();
	});
	test('displays saved articles correctly', () => {
		// Define saved articles data
		const savedArticles = [
			{ title: 'Article 1', content: 'Lorem ipsum dolor sit amet' },
			{ title: 'Article 2', content: 'Consectetur adipiscing elit' },
		];
		// Save the articles to local storage
		localStorage.setItem('savedNewsItems', JSON.stringify(savedArticles));
		// Render SavedArticles component
		render(<SavedArticles />);
		// Get all article elements
		const articleElements = screen.getAllByTestId('article');
		// Assertions
		expect(articleElements).toHaveLength(2);
		expect(articleElements[0]).toHaveTextContent('Article 1');
		expect(articleElements[1]).toHaveTextContent('Article 2');
	});
	test('displays no saved articles message when there are no saved articles', () => {
		// Remove saved articles from local storage
		localStorage.removeItem('savedNewsItems');
		// Render SavedArticles component
		render(<SavedArticles />);
		// Get the element for no saved articles message
		const noArticlesElement = screen.getByText('No saved articles found');
		// Assertion
		expect(noArticlesElement).toBeInTheDocument();
	});
});
