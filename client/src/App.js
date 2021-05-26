import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import AddItem from "./components/AddItem";
import RoomDetails from './components/RoomDetails'
import Home from './components/Home'

import { GlobalProvider } from "./context/StateMgr";

function App() {
	return (
		<GlobalProvider>
			<Router>
				<Header />
				<main className="py-3">
					<Container>
						<Route path='/' component={Home} exact/>
						<Route path="/addroom" component={AddItem}/>
						<Route path='/room/:id' component={RoomDetails}/>
					</Container>
				</main>

				<Footer />
			</Router>
		</GlobalProvider>
	);
}

export default App;
