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
	} catch (error) {
		console.log(error);
	}
};
