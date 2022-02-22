import "./App.css";
import { useState } from "react";
import { fetchRequest } from "./utils";

const App = () => {
	const [user, setUser] = useState();
	const [username, setUsername] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	// fetchRequest > user info
	const handleSubmit = async (e) => {
		e.preventDefault();
		// console.log(username, email, password);
		fetchRequest(setUser, username, email, password);
	};

	return (
		<div>
			<h1>{user ? `Welcome ${user}` : "Please Sign Up"}</h1>

			<form onSubmit={handleSubmit}>
				<input onChange={(e) => setUsername(e.target.value)} value={username} />
				<input onChange={(e) => setEmail(e.target.value)} value={email} />
				<input onChange={(e) => setPassword(e.target.value)} value={password} />
				<button type="submit">Sign Up</button>
			</form>
		</div>
	);
};

export default App;
