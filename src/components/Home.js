export const Home = ({ user }) => {
	return (
		<div>
			<h2>Home</h2>
			{/* <h3>{user.user.username}</h3> */}
			<h3>{user ? user.user.username : "You are not logged in"}</h3>
		</div>
	);
};
