import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import SavedArticles from './components/SavedArticles/SavedArticles';
import About from './components/About/About';
function App() {
	return (
		<BrowserRouter>
			<nav>
				<Link to='/' />
				<Link to='/savedarticles' />
			</nav>
			<main>
				<Routes>
					<Route path='/' element={<HomePage />}></Route>
					<Route path='/savedarticles' element={<SavedArticles />}></Route>
					<Route path='/about' element={<About />}></Route>
				</Routes>
			</main>
		</BrowserRouter>
	);
}

export default App;
