import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
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
					<Route></Route>
				</Routes>
			</main>
		</BrowserRouter>
	);
}

export default App;
