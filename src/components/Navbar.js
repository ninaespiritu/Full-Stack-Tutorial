import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav>
			<ul>
				<Link to="/home">
					<li>Home</li>
				</Link>
                <Link to="/profile">
                    <li>Profile</li>
                </Link>
				
			</ul>
		</nav>
	);
};
