import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
	const navigate = useNavigate();

	return (
		<div className="notFound text-center container top">
			<img src="assets/404.jpg" alt="" />
			<br />
			<div className="d-flex gap-3 justify-content-center">
				<button className="mt-3" onClick={() => navigate(-1)}>
					Back
				</button>
				<Link to="/">
					<button className="mt-3">Homepage</button>
				</Link>
			</div>
		</div>
	);
}
