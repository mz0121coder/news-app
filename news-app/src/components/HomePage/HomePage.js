import SearchBar from './SearchBar/SearchBar';
import ResultsArea from './ResultsArea/ResultsArea';
import { useState } from 'react';
const API_KEY = process.env.REACT_APP_API_KEY;

export default function HomePage() {
	const [search, setSearch] = useState('');
	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	async function handleSearchClick() {
		try {
			setLoading(true);
			const url = `https://gnews.io/api/v4/search?q=${search}&lang=en&country=uk&max=10&apikey=${API_KEY}`;
			const response = await fetch(url);
			const data = await response.json();
			console.log(data);
			if (data.error) {
				setError(data.error);
			} else {
				setArticles(data.articles);
			}
		} catch (error) {
			setError(error.message);
		} finally {
			setLoading(false);
		}
	}

	return (
		<>
			<SearchBar
				search={search}
				handleInputChange={event => setSearch(event.target.value)}
				handleSearchClick={handleSearchClick}
			/>
			{loading ? (
				<p>Loading...</p>
			) : error ? (
				<p>Error: {error}</p>
			) : (
				<ResultsArea articles={articles} />
			)}
		</>
	);
}
