export const SignUp = ({ props }) => {
	return (
		<div>
			<h1>Welcome</h1>
			<h3>Sign up and create your account.</h3>
			<form onSubmit={props.handleSubmit}>
				<input onChange={(e) => props.setEmail(e.target.value)} placeholder="email" />
				<input onChange={(e) => props.setUsername(e.target.value)} placeholder="username" />
				<input onChange={(e) => props.setPassword(e.target.value)} placeholder="password" type="password" />
				<button type="submit">Sign Up</button>
			</form>
		</div>
	);
};
