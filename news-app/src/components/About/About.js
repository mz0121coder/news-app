import MenuBar from '../MenuBar/MenuBar';
import './About.css';
import aboutMePhoto from '../../assets/coding_and_chilling.PNG';

export default function About() {
	return (
		<main style={{ textAlign: 'center' }}>
			{' '}
			<div className='about-heading-container'>
				<MenuBar />
				<h1>About</h1>
			</div>
			<div className='paragraph-container'>
				<p>
					This is a React app that I built as part of a take-home tech test. I
					enjoyed making this, so thought I'd share more about who I am.
				</p>
				<p>
					I'm a former trader with a background in Economics. In late 2022 I
					shifted my focus to learning full stack software development, joining
					the School of Code a few months later.
				</p>
				<p>
					If you liked this project, check out more of my work on{' '}
					<a href='https://github.com/mz0121coder'>Github</a> and feel free to
					connect on <a href='https://linkedin.com/in/mzcoder7/'>LinkedIn</a>
				</p>
				<p>Here I am, chilling with my buddy</p>
			</div>
			<img id='about-me-photo' src={aboutMePhoto} alt='coding and chilling' />
		</main>
	);
}
