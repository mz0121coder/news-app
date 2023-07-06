import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import ArticlePage from './components/ArticlePage/ArticlePage';
function App() {
	return (
		<BrowserRouter>
			<nav>
				<Link to='/' />
				<Link to='/articlepage' />
			</nav>
			<main>
				<Routes>
					<Route path='/' element={<HomePage />}></Route>
					<Route path='/articlepage' element={<ArticlePage />}></Route>
				</Routes>
			</main>
		</BrowserRouter>
	);
}

export default App;
