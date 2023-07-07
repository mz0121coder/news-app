/*
return div containing props (from component tree) for each news item
- title, image, description, source, date
*/
export default function NewsItem(props) {
	return (
		<div className='news-item'>
			<h1>{props.title}</h1>
			<img src={props.image} alt='news item'></img>
			<p>{props.description}</p>
			<p>
				News Source:{' '}
				<a href={props.url} target='_blank' rel='noopener noreferrer'>
					{props.source}
				</a>
			</p>
			<p>Published On: {props.date}</p>
		</div>
	);
}
