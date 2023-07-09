import MenuBar from '../MenuBar/MenuBar';

export default function SavedArticles() {
	return (
		<div
			className='saved-articles-heading'
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			<MenuBar />
			<h1>News article page</h1>
		</div>
	);
}
