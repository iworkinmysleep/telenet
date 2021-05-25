import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import AddItem from "./components/AddItem";

function App() {
	return (
		<>
			<Router>
				<Header />
				<main className="py-3">
					<Container>
						<Route path="/" component={AddItem} exact />
					</Container>
				</main>

				<Footer />
			</Router>
		</>
	);
}

export default App;
