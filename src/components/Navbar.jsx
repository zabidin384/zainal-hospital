import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<nav className="navbar d-flex bg-light container-fluid position-fixed">
			<div className="container">
				<div className="d-flex align-items-center gap-3">
					<img src="assets/general/logo.png" alt="" />
					<div className="fw-bold">
						Qendra Klinike <br /> Universitare e Kosoves QKUK
					</div>
				</div>
				<ul className="d-flex list-unstyled justify-content-space-between align-items-center gap-4">
					<li>
						<Link to="/">
							<i className="bi bi-house-fill"></i> Home
						</Link>
					</li>
					<li>
						<Link to="/about">
							<i className="bi bi-info-circle-fill"></i> About
						</Link>
					</li>
					<li>
						<Link to="/menu">
							<i class="bi bi-book-fill"></i> Menu
						</Link>
					</li>
					<li>
						<Link to="/login">
							<button>Login</button>
						</Link>
					</li>
					<li>
						<Link to="/register">
							<button>Register</button>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
