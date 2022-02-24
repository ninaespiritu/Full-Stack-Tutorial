export const fetchRequest = async (setUser, username, email, password) => {
	// console.log(username, email, password)
	try {
		const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				username: username,
				email: email,
				password: password,
				// SHORT VERSION: username, email, password,
			}),
		});
		const data = await response.json();
		console.log(data);
		setUser(data);
	} catch (error) {
		console.log(error);
	}
};

export const loginRequest = async (setUser, username, password) => {
	console.log(username)
	try {
		const response = await fetch(`${process.env.REACT_APP_REST_API}login`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				username: username,
				password: password,
			}),
		});
		const data = await response.json();
		console.log(data);
		setUser(data);
	} catch (error) {
		console.log(error);
	}
};
