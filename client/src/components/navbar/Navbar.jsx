import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
	const navigate = useNavigate();
	const { user } = useContext(AuthContext);

	return (
		<div className="navbar">
			<div className="navContainer">
				<Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
					<span className="logo">SwapHotels</span>
				</Link>
				{user ? (
					<div className="navItems">
						<span className="username">hello, {user.username}</span>
						<button className="navButton" onClick={() => navigate("/login")}>
							Logout
						</button>
					</div>
				) : (
					<div className="navItems">
						<button className="navButton" onClick={() => navigate("/login")}>
							Register
						</button>
						<button className="navButton" onClick={() => navigate("/login")}>
							Login
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
