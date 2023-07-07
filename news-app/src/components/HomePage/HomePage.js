import SearchBar from './SearchBar/SearchBar';
import ResultsArea from './ResultsArea/ResultsArea';
import { useState } from 'react';
const API_KEY = process.env.REACT_APP_API_KEY;

export default function HomePage() {
	const [search, setSearch] = useState('');
	const [articles, setArticles] = useState([]);

	function handleInputChange(event) {
		setSearch(event.target.value);
	}

	async function handleSearchClick() {
		const url = `https://gnews.io/api/v4/search?q=${search}&lang=en&country=uk&max=10&apikey=${API_KEY}`;
		const response = await fetch(url);
		const data = await response.json();
		console.log(data);
		if (data) {
			setArticles(data.articles);
		} else {
			throw new Error('Error fetching data');
		}
	}

	return (
		<>
			<SearchBar
				search={search}
				handleInputChange={handleInputChange}
				handleSearchClick={handleSearchClick}
			/>
			<ResultsArea articles={articles} />
		</>
	);
}
