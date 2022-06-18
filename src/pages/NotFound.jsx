import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
	return (
		<div className="notFound text-center container top">
			<img src="assets/404.jpg" alt="" />
			<br />
			<Link to="/">
				<button className="btn btn-primary mt-3">Back to Homepage</button>
			</Link>
		</div>
	);
}
