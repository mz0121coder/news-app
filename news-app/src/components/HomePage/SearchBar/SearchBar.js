/*
SearchBar component returns an input where the user types, updating the search query
Clicking on the button renders news events based on the new search query
*/
// Import the required dependencies
import './SearchBar.css';
import { TextField, Button } from '@mui/material';
import MenuBar from '../../MenuBar/MenuBar';

// Define the SearchBar component
export default function SearchBar(props) {
	// Render the search bar
	return (
		<div className='search-bar'>
			<MenuBar />
			<TextField
				id='outlined-basic'
				placeholder='Search for news'
				variant='outlined'
				value={props.search}
				onChange={props.handleInputChange}
				size='small'
			/>
			<Button variant='contained' onClick={props.handleSearchClick}>
				Submit
			</Button>
		</div>
	);
}
