import React from "react";
import Disease from "../../components/Disease";

export default function Home() {
	return (
		<div className="home">
			<div className="homeHeader position-relative">
				<img src="assets/general/heroimage.png" alt="" className="img-fluid" />
				<div className="homeHeaderText position-absolute text-center">
					<h1>We take care of your health!</h1>
					<button className="me-4">Login</button>
					<button>Register</button>
				</div>
			</div>

			<div className="container">
				<div className="homeAbout mb-5">
					<div className="row">
						<div className="col">
							<img src="assets/general/patient.png" alt="" />
						</div>
						<div className="col">
							<h1 className="text-center">About Us</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
								minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
							</p>
							<p>Duis aute irure dolor in reprehenderit in voluptate Velit esse cillum dolore eu fugiat nulla pariatur.</p>
							<button className="mt-3">Read more</button>
						</div>
					</div>
				</div>

				<div className="homeDisease mb-5">
					<h1>Read About Disease</h1>
					<div className="d-flex gap-5">
						<Disease />
						<Disease />
						<Disease />
					</div>
				</div>

				<div className="contact text-center">
					<h2>Contact</h2>
					<form>
						<input type="text" placeholder="Name" />
						<input type="text" placeholder="Surname" />
						<input type="text" placeholder="Contact number" />
						<input type="email" placeholder="Email" />
						<textarea rows="10" placeholder="Message" className="mt-4"></textarea>
						<br />
						<button className="my-4">Send</button>
					</form>
				</div>
			</div>
		</div>
	);
}
