import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import HomePage from "./components/HomePage";
import AddRoom from "./components/AddRoom";

function App() {
	return (
		<>
			<Router>
				<Header />
				<main className="py-3">
					<Container>
						<Route path="/" component={HomePage} exact />
						<Route path="/addroom" component={AddRoom} />
					</Container>
				</main>

				<Footer />
			</Router>
		</>
	);
}

export default App;
