import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
	test('renders homepage', () => {
		render(
			<BrowserRouter>
				<App />
			</BrowserRouter>
		);

		// Assert that the homepage is rendered
		const homepageElement = screen.getByText(/News App/i);
		expect(homepageElement).toBeInTheDocument();
	});

	test('renders saved articles page', () => {
		render(
			<BrowserRouter>
				<App />
			</BrowserRouter>
		);

		// Assert that the saved articles page is rendered
		const savedArticlesElement = screen.getByText(/Saved Articles/i);
		expect(savedArticlesElement).toBeInTheDocument();
	});
});
