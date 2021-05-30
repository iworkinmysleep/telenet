import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import AddRoom from "./components/AddRoom";
import AddHall from "./components/AddHall";
import RoomDetails from './components/RoomDetails'
import HallDetails from './components/HallDetails'
import Home from './components/Home'


import { GlobalProvider } from "./context/StateMgr";

function App() {
	return (
		<GlobalProvider>
			<Router>
				<Header />
				<main className="py-3 bg-overlay">
					<Container>
						<Route path='/' component={Home} exact/>
						<Route path="/addroom" component={AddRoom}/>
						<Route path='/room/:id' component={RoomDetails}/>
						<Route path="/addhall" component={AddHall}/>
						<Route path='/hall/:id' component={HallDetails}/>
						
					</Container>
				</main>

				<Footer />
			</Router>
		</GlobalProvider>
	);
}

export default App;
