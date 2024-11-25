// // Type of React Router

// import React from "react";
// import {
// 	BrowserRouter as Router,
// 	Component,
// 	Route,
// 	Routes,
// 	Link,
	
// } from "react-router-dom";

// import Home from "./component/home";
// import About from "./component/about";
// import Contact from "./component/contact";
// import "./App2.css";

// class App2 extends Component {
// 	render() {
// 		return (
// 			<Router>
// 				<div className="App2">
// 					<ul className="App-header">
// 						<li>
// 							<Link to="/">Home</Link>
// 						</li>
// 						<li>
// 							<Link to="/about">
// 								About Us
// 							</Link>
// 						</li>
// 						<li>
// 							<Link to="/contact">
// 								Contact Us
// 							</Link>
// 						</li>
// 					</ul>
// 					<Routes>
// 						<Route
// 							exact
// 							path="/"
// 							component={Home}
// 						></Route>
// 						<Route
// 							exact
// 							path="/about"
// 							component={About}
// 						></Route>
// 						<Route
// 							exact
// 							path="/contact"
// 							component={Contact}
// 						></Route>
// 					</Routes>
// 				</div>
// 			</Router>
// 		);
// 	}
// }

// export default App2;




import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App2() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App2;

