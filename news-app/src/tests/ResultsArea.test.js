import { render, screen } from '@testing-library/react';
import ResultsArea from '../components/HomePage/ResultsArea/ResultsArea';
test('renders news items correctly', () => {
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
	];

	render(<ResultsArea articles={articles} />);

	const newsItems = screen.getAllByTestId('news-item');
	expect(newsItems).toHaveLength(2);

	const firstNewsItem = newsItems[0];
	expect(firstNewsItem).toHaveTextContent('Article 1');
	expect(firstNewsItem).toHaveTextContent('Description 1');
	expect(firstNewsItem).toHaveTextContent('Source 1');
	expect(firstNewsItem).toHaveTextContent('January 1, 2021');

	const secondNewsItem = newsItems[1];
	expect(secondNewsItem).toHaveTextContent('Article 2');
	expect(secondNewsItem).toHaveTextContent('Description 2');
	expect(secondNewsItem).toHaveTextContent('Source 2');
	expect(secondNewsItem).toHaveTextContent('January 2, 2021');
});

// Edge test case
test('renders no news items', () => {
	const articles = [];

	render(<ResultsArea articles={articles} />);

	const newsItems = screen.queryAllByTestId('news-item');
	expect(newsItems).toHaveLength(0);
});
