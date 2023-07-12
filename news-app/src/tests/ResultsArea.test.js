import { render, screen } from '@testing-library/react';
import ResultsArea from '../components/HomePage/ResultsArea/ResultsArea';
// Test case: Renders news items correctly
test('renders news items correctly', () => {
	// Define sample articles
	const articles = [
		{
			id: 1,
			title: 'Article 1',
			image: 'image1.jpg',
			description: 'Description 1',
			url: 'https://example.com/article1',
			source: { name: 'Source 1' },
			publishedAt: '2021-01-01',
		},
		{
			id: 2,
			title: 'Article 2',
			image: 'image2.jpg',
			description: 'Description 2',
			url: 'https://example.com/article2',
			source: { name: 'Source 2' },
			publishedAt: '2021-01-02',
		},
		{
			id: 3,
			title: 'Article 2',
			image: 'image2.jpg',
			description: 'Description 3',
			url: 'https://example.com/article3',
			source: { name: 'Source 3' },
			publishedAt: '2021-01-03',
		},
	];
	// Render ResultsArea component with the sample articles
	render(<ResultsArea articles={articles} />);
	// Get all news items
	const newsItems = screen.getAllByTestId('news-item');
	// Assertions for the first news item
	const firstNewsItem = newsItems[0];
	expect(firstNewsItem).toHaveTextContent('Article 1');
	expect(firstNewsItem).toHaveTextContent('Description 1');
	expect(firstNewsItem).toHaveTextContent('Source 1');
	expect(firstNewsItem).toHaveTextContent('January 1, 2021');
	// Assertions for the second news item
	const secondNewsItem = newsItems[1];
	expect(secondNewsItem).toHaveTextContent('Article 2');
	expect(secondNewsItem).toHaveTextContent('Description 2');
	expect(secondNewsItem).toHaveTextContent('Source 2');
	expect(secondNewsItem).toHaveTextContent('January 2, 2021');
});
// Test case: Renders no news items
test('renders no news items', () => {
	// Define empty articles array
	const articles = [];
	// Render ResultsArea component with the empty articles array
	render(<ResultsArea articles={articles} />);
	// Get all news items
	const newsItems = screen.queryAllByTestId('news-item');
	// Assertion: No news items should be rendered
	expect(newsItems).toHaveLength(0);
});
