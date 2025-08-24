import './App.scss';
import About from './components/About/About';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Join from './components/Join/Join';
import Services from './components/Services/Services';
import Tehnologies from './components/Tehnologies/Tehnologies';
import Footer from './components/Footer/Footer.jsx';

function App() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<About />
				<Tehnologies />
				<Services />
				<Join />
			</main>
			<Footer />
		</>
	);
}

export default App;
