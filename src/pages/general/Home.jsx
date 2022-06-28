import React, { useState } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../config";
import Article from "../../components/Article";

export default function Home({ posts }) {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");

	async function handleSubmit(e) {
		e.preventDefault();
		setError("");
		setSuccess("");

		try {
			const res = await axiosInstance.post("/users/contact", {
				firstName,
				lastName,
				phoneNumber,
				email,
				message,
			});
			res && setSuccess("Your message has been sent successfully!");
			console.log(res);
		} catch (err) {
			if (err.response) {
				setError("You failed to submit the form!");
				console.log(err.response);
			}
		}
	}

	return (
		<div className="home top">
			<div className="homeHeader text-center">
				<div className="text-center">
					<img src="/assets/general/heroimg.jpg" alt="" className="imgHero" />
				</div>
				<div className="homeHeaderText position-absolute text-center">
					<h1>We take care of your health!</h1>
					<h5>"He who has health, has hope; and he who has hope, has everything."</h5>
					<h5>- Thomas Carlyle</h5>
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
							<Link to="/about">
								<button className="mt-3">Read more</button>
							</Link>
						</div>
					</div>
				</div>

				<div className="homeArticle mb-5">
					<h1>Read Our Articles</h1>
					<div className="d-flex gap-5">
						<Article posts={posts} />
					</div>
				</div>

				<div className="contact text-center">
					<h1 className="mb-5">Contact</h1>
					<form onSubmit={handleSubmit}>
						<input
							type="text"
							placeholder="First Name"
							className="inputHome"
							required
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
						/>
						<input type="text" placeholder="Last Name" required value={lastName} onChange={(e) => setLastName(e.target.value)} />
						<input
							type="text"
							placeholder="Mobile Number"
							className="inputHome"
							required
							value={phoneNumber}
							onChange={(e) => setPhoneNumber(e.target.value)}
						/>
						<input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
						<textarea rows="10" placeholder="Message" className="mt-4" required value={message} onChange={(e) => setMessage(e.target.value)} />
						<br />
						<button className="my-4">Send</button>
						<div className="error">{error}</div>
						<div className="success">{success}</div>
					</form>
				</div>
			</div>
		</div>
	);
}
