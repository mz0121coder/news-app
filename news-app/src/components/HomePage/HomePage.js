import SearchBar from './SearchBar/SearchBar';
import ResultsArea from './ResultsArea/ResultsArea';
import { useState } from 'react';
const API_KEY = process.env.REACT_APP_API_KEY;

export default function HomePage() {
	const url = `https://gnews.io/api/v4/search?q=football&lang=en&country=uk&max=100&apikey=${API_KEY}`;

	const [search, setSearch] = useState('');

	function handleInputChange(event) {
		setSearch(event.target.value);
	}

	async function handleSearchClick() {
		const response = await fetch(url);
		const data = await response.json();
		console.log(data);
	}

	return (
		<>
			<SearchBar
				search={search}
				handleInputChange={handleInputChange}
				handleSearchClick={handleSearchClick}
			/>
			<ResultsArea />
		</>
	);
}
