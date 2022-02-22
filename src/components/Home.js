export const Home = ({ user }) => {
	return (
		<div>
			<h2>Home</h2>
			<h3>{user.user.username}</h3>
		</div>
	);
};
