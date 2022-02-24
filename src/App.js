import "./App.css";
import { useState } from "react";
import { fetchRequest, loginRequest } from "./utils";
import { Home } from "./components/Home";
import { SignUp } from "./components/SignUp";
import { Navbar } from "./components/Navbar";
import { Profile } from "./components/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";

const App = () => {
	const [user, setUser] = useState();
	const [username, setUsername] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	const handleSubmit = async (e) => {
		e.preventDefault();
		// console.log(username, email, password);
		fetchRequest(setUser, username, email, password);
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		// console.log(username, email, password);
		loginRequest(setUser, username, password);
	};

	return (
		<div>
			{user ? (
				<Router>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home user={user} />}></Route>
						<Route 
							path="profile" 
							element={
								<Profile user={user} />
							}>
						</Route>
					</Routes>
			</Router>
			) : (
				<div>
					<SignUp
					props={{ handleSubmit, setUsername, setEmail, setPassword }}
					/>
					<Login
						props={{ handleLogin, setUsername, setPassword }}
					/>
				</div>
				
			)}
		</div>
	);
};

export default App;
