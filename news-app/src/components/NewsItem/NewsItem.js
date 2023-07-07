/*
return div containing props (from component tree) for each news item
- title, image, description, source, date
*/
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Link from '@mui/material/Link';

const ExpandMore = styled(props => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
})(({ theme, expand }) => ({
	transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
	marginLeft: 'auto',
	transition: theme.transitions.create('transform', {
		duration: theme.transitions.duration.shortest,
	}),
}));

export default function NewsItem(props) {
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<Card sx={{ maxWidth: 350 }}>
			<CardHeader
				action={
					<IconButton aria-label='settings'>
						<MoreVertIcon />
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
					{' '}
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
