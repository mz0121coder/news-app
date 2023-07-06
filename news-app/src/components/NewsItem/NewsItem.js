/*
return div containing props (from component tree) for each news item
- title, image, description, source, date
*/
export default function NewsItem(props) {
	return (
		<div className='news-item'>
			<h1>{props.title}</h1>
			<img src={props.image} alt='news-event' />
			<p>{props.description}</p>
			<p>News Source: {props.source}</p>
			<p>Published On: {props.date}</p>
		</div>
	);
}
