import "./App.css";
import { useState } from "react";
import { fetchRequest } from "./utils";
import { Home } from "./components/Home";
import { SignUp } from "./components/SignUp";

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
				<Home user={user} />
			) : (
				<SignUp
					props={{ handleSubmit, setUsername, setEmail, setPassword }}
				/>
			)}
		</div>
	);
};

export default App;
