export const Profile = ({ user }) => {
	return (
		<div>
			<h2>Profile</h2>
			{/* <h3>{user.user.username}</h3> */}
			{user ? user.user.username : "You are not logged in"}
		</div>
	);
};
