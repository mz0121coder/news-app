import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
	test('renders homepage', () => {
		render(<App />);

		// Assert that the homepage is rendered
		const homepageElement = screen.getByText(/News App/i);
		expect(homepageElement).toBeInTheDocument();
	});
});
