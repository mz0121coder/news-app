import MenuBar from '../MenuBar/MenuBar';
import './SavedArticles.css';
import { useState, useEffect } from 'react';
import ResultsArea from '../HomePage/ResultsArea/ResultsArea';

export default function SavedArticles() {
	const [newsItems, setNewsItems] = useState([]);
	useEffect(() => {
		const savedNewsItems =
			JSON.parse(localStorage.getItem('savedNewsItems')) || [];
		setNewsItems(savedNewsItems);
	}, []);
	console.log({ newsItems });
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
