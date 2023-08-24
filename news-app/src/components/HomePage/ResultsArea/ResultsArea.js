/*
  Import the NewsItem template
  Render a NewsItem component for each article from the most recent data fetch
*/
import NewsItem from '../../NewsItem/NewsItem';
import './ResultsArea.css';
export default function ResultsArea(props) {
	return (
		<div className='result-area'>
			{/* <h1>News</h1> */}
			{props.articles.map((article, index) => (
				<div key={index} className='news-item-container'>
					<NewsItem
						id='news-item'
						title={article.title}
						image={article.image}
						description={article.description}
						url={article.url}
						// read source.name on homepage for each news item, on saved articles page, it is just a 'source' key
						source={
							window.location.pathname === '/'
								? article.source.name
								: article.source
						}
						// on the homepage, format date the first time it is read from each news item object. On saved articles page, it is already added as a 'date' key for each item, so no need to format it again.
						date={
							window.location.pathname === '/'
								? new Date(article.publishedAt).toLocaleDateString('en-GB', {
										weekday: 'long',
										year: 'numeric',
										month: 'long',
										day: 'numeric',
								  })
								: article.date
						}
					/>
				</div>
			))}
		</div>
	);
}
