import React from "react";
import { BrowserRouter as Router, Routes, Navigate, Route } from "react-router-dom";
import Login from "./Component/login"
import Signup from "./Component/signup";
import Home from "./Component/Home";
import { ContextProvider } from "./context";
import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<ContextProvider>
			<Router>
				<Routes>
					<Route exact path="/" element={<Navigate to="/login" />} />
					<Route exact path="/login" element={<Login />} />
					<Route exact path="/signup" element={<Signup />} />
					<Route exact path="/Home" element={<Home />} />
				</Routes>
			</Router>
		</ContextProvider>
	);
}

export default App;
