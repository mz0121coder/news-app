import MenuBar from '../MenuBar/MenuBar';
import './SavedArticles.css';
import { useState, useEffect } from 'react';
import ResultsArea from '../HomePage/ResultsArea/ResultsArea';
export default function SavedArticles() {
	// State to store the saved news items
	const [newsItems, setNewsItems] = useState([]);
	// Fetch saved news items from local storage
	useEffect(() => {
		const savedNewsItems =
			JSON.parse(localStorage.getItem('savedNewsItems')) || [];
		setNewsItems(savedNewsItems);
	}, [newsItems]);
	return (
		<>
			<div className='saved-heading-container'>
				<MenuBar />
				<h1>Saved Articles</h1>
			</div>
			<>
				<ResultsArea articles={newsItems} />
			</>
		</>
	);
}
