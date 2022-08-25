import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Technology from './pages/Technology';
import Destination from './pages/Destination';
import Crew from './pages/Crew';


function App() {
  return (
		<BrowserRouter>
		
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='Destination' element={<Destination />} />
				<Route path='Crew' element={<Crew />} />
				<Route path='Technology' element={<Technology />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
