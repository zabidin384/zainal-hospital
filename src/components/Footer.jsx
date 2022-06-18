import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<div className="footer container mt-5">
			<hr />
			<div className="row d-flex justify-content-around">
				<div className="col-2 d-flex flex-column quickLinks">
					<h5>Quick Links</h5>
					<Link to="#">Home</Link>
					<Link to="#">Appointment</Link>
					<Link to="#">Service</Link>
					<Link to="#">About Us</Link>
				</div>
				<div className="col-3">
					<h5>Hours</h5>
					<div className="row">
						<div className="col">
							<div>Monday</div>
							<div>Tuesday</div>
							<div>Wednesday</div>
							<div>Thursday</div>
							<div>Friday</div>
						</div>
						<div className="col">
							<div>9:00-18:00</div>
							<div>9:00-18:00</div>
							<div>9:00-18:00</div>
							<div>9:00-18:00</div>
							<div>9:00-18:00</div>
						</div>
					</div>
				</div>
				<div className="col-3">
					<h5>Contact</h5>
					<div>
						<i className="bi bi-telephone-fill"></i> +381 38 500 600
					</div>
					<div>
						<i className="bi bi-envelope-fill"></i> drejtoria.shskuk@rks-gov.net
					</div>
					<div>
						<i className="bi bi-geo-alt-fill"></i> Lagjia Spitalit, Prishtine 1000, Kosove
					</div>
				</div>
			</div>
		</div>
	);
}
