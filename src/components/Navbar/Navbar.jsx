import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

function NavBar() {

	return (
		<div className="navBar">
			<div className="logo">
				<Link to="/">
					<span>Videogames Wiki 🎮</span>
				</Link>
			</div>
			<div className="menu">
				<ul>
					<li>
						<Link to="/home">HOME</Link>
					</li>
					
					<li>
						<Link to="/videogames/asdsad">404</Link>
					</li>
				</ul>
			</div>
		</div>

	);
}




export default NavBar;