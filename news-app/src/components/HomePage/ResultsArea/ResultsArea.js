/*
import NewsItem template
render a NewsItem component for each article from the most recent fetch data 
*/
import NewsItem from '../../NewsItem/NewsItem';
import './ResultsArea.css';

export default function ResultsArea(props) {
	return (
		<div className='result-area'>
			{/* <h1>News</h1> */}
			{props.articles.map(article => (
				<div key={article.id} className='news-item-container'>
					<NewsItem
						title={article.title}
						image={article.image}
						description={article.description}
						url={article.url}
						source={article.source.name}
						date={new Date(article.publishedAt).toLocaleDateString('en-GB', {
							weekday: 'long',
							year: 'numeric',
							month: 'long',
							day: 'numeric',
						})}
					/>
				</div>
			))}
		</div>
	);
}
