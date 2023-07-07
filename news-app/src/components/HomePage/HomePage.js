import SearchBar from './SearchBar/SearchBar';
import ResultsArea from './ResultsArea/ResultsArea';
import { useState, useEffect } from 'react';
// const API_KEY = process.env.API_KEY;
export default function HomePage() {
	const url = `https://gnews.io/api/v4/search?q=football&lang=en&country=uk&max=100&apikey=14d5af9afc1b2b7d20e2f08373271d53`;

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
				handleInputChange={handleInputChange}
				handleSearchClick={handleSearchClick}
			/>
			<ResultsArea />
		</>
	);
}
