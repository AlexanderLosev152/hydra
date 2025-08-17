import './App.scss';
import About from './components/About/About';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Tehnologies from './components/Tehnologies/Tehnologies';

function App() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<About />
				<Services />
				<Tehnologies />
			</main>
		</>
	);
}

export default App;
