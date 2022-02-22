import "./App.css";
import { useState } from "react";
import { fetchRequest } from "./utils";
import { Home } from "./components/Home";
import { SignUp } from "./components/SignUp";
import { Navbar } from "./components/Navbar";
import { Profile } from "./components/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

	return (
		<div>
			{user ? (
				<Router>
					<Navbar />
					<Routes>
						<Route path="/home" element={<Home user={user} />}></Route>
						<Route path="/profile" element={<Profile user={user} />}></Route>
					</Routes>
			</Router>
			) : (
				<SignUp
					props={{ handleSubmit, setUsername, setEmail, setPassword }}
				/>
			)}
		</div>
	);
};

export default App;
