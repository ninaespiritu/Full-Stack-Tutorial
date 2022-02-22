export const SignUp = ({ props }) => {
	return (
		<div>
			<h1>Welcome</h1>
			<h3>Sign up and create your account.</h3>
			<form onSubmit={props.handleSubmit}>
				<input onChange={(e) => props.setUsername(e.target.value)} />
				<input onChange={(e) => props.setEmail(e.target.value)} />
				<input onChange={(e) => props.setPassword(e.target.value)} />
				<button type="submit">Sign Up</button>
			</form>
		</div>
	);
};
