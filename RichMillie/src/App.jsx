import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Masthead } from './components/Masthead/Masthead';

function App() {
	return (
		<div className='app-structure'>
			<Navbar />
			<div className='main-content-structure'>
				<Masthead />
			</div>
		</div>
	);
}

export default App;
