export const Login = ({ props }) => {
	return (
		<div>
			<h3>Log in to your account.</h3>
			<form onSubmit={props.handleLogin}>
				<input onChange={(e) => props.setUsername(e.target.value)} placeholder="username" />
				<input onChange={(e) => props.setPassword(e.target.value)} placeholder="password" type="password" />
				<button type="submit">Log In</button>
			</form>
		</div>
	);
};
