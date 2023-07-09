import React, { useState, forwardRef } from 'react';
import { styled } from '@mui/material/styles';
import {
	Card,
	CardHeader,
	CardMedia,
	CardContent,
	CardActions,
	Collapse,
	IconButton,
	Typography,
	Link,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import BookmarkAdd from '@mui/icons-material/BookmarkAdd';
// Styled component for the expand button
const ExpandMore = styled(IconButton)(({ theme, expand }) => ({
	transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
	marginLeft: 'auto',
	transition: theme.transitions.create('transform', {
		duration: theme.transitions.duration.shortest,
	}),
}));
const Alert = forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});
export default function NewsItem(props) {
	const [snackbarOpen, setSnackbarOpen] = useState(false);
	const [duplicate, setDuplicate] = useState(false);
	const [expanded, setExpanded] = useState(false);
	// Function to handle the expand button click
	const handleExpandClick = () => {
		setExpanded(!expanded);
	};
	// Function to handle the save button click
	const handleSaveClick = newsItem => {
		const saveConfirmation = window.confirm(
			'Do you want to save this news article for later?'
		);
		if (saveConfirmation) {
			// Save the NewsItem to local storage
			const savedNewsItems =
				JSON.parse(localStorage.getItem('savedNewsItems')) || [];
			// Check if the news item already exists in the array
			const isDuplicate = savedNewsItems.some(
				item => item.title === newsItem.title
			);
			if (!isDuplicate) {
				// Add the news item to the array if it doesn't exist
				savedNewsItems.push(newsItem);
				localStorage.setItem('savedNewsItems', JSON.stringify(savedNewsItems));
				setSnackbarOpen(true);
				console.log(savedNewsItems);
			} else {
				setDuplicate(true);
				console.log('News item already exists in savedNewsItems');
			}
		}
	};
	return (
		<Card sx={{ maxWidth: 350 }}>
			<Snackbar
				open={snackbarOpen}
				autoHideDuration={5000}
				onClose={() => setSnackbarOpen(false)}>
				<Alert severity='success' sx={{ width: '100%' }}>
					News item added!
				</Alert>
			</Snackbar>
			<Snackbar
				open={duplicate}
				autoHideDuration={5000}
				onClose={() => setDuplicate(false)}>
				<Alert severity='info' sx={{ width: '100%' }}>
					News item already added!
				</Alert>
			</Snackbar>
			<CardHeader
				action={
					<IconButton
						aria-label='settings'
						onClick={() => handleSaveClick(props)}>
						{/* <MoreVertIcon /> */}
						<BookmarkAdd />
					</IconButton>
				}
				title={
					<Typography variant='h6' fontSize={16}>
						{expanded
							? props.title
							: props.title.length > 60
							? props.title.slice(0, 60) + '...'
							: props.title}
					</Typography>
				}
				subheader={
					<Typography variant='h6' fontSize={14}>
						{props.date}
					</Typography>
				}
			/>
			<CardMedia
				component='img'
				height='194'
				image={props.image}
				alt='news item'
			/>
			<CardActions>
				<div
					className='expand'
					style={{
						display: 'flex',
						justifyContent: 'flex-start',
						alignItems: 'center',
					}}>
					<Typography fontSize={15}>
						{!expanded ? 'Show details' : 'Hide'}
					</Typography>
					<ExpandMore
						expand={expanded}
						onClick={handleExpandClick}
						aria-expanded={expanded}
						aria-label='show more'>
						<ExpandMoreIcon />
					</ExpandMore>
				</div>
			</CardActions>
			<Collapse in={expanded} timeout='auto' unmountOnExit>
				<CardContent>
					<Typography fontSize={15}>{props.description}</Typography>
					<Typography fontSize={15}>News Source:</Typography>
					<Link target='_blank' href={props.url} rel='noreferrer' fontSize={15}>
						{props.source}
					</Link>
				</CardContent>
			</Collapse>
		</Card>
	);
}
