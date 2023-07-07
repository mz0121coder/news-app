/*
SearchBar component returns an input where the user types, updating the search query
Clicking on the button renders news events based on the new search query
*/

export default function SearchBar(props) {
	return (
		<div className='search-bar'>
			<input
				type='text'
				id='search-input'
				placeholder='Search for news'
				onChange={props.handleInputChange}
			/>
			<button id='search-btn' onClick={props.handleSearchClick}>
				Submit
			</button>
		</div>
	);
}
