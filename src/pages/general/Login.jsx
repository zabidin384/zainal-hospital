import React, { useState } from "react";
import { axiosInstance } from "../../config";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [role, setRole] = useState("patient");
	const [error, setError] = useState("");

	async function handleSubmit(e) {
		e.preventDefault();
		setError("");

		try {
			const res = await axiosInstance.post("/auth/authenticate", {
				email,
				password,
				role,
			});
			localStorage.setItem("jwt", res.data.jwt);
			window.location.replace("/");
		} catch (err) {
			if (err.response) {
				setError("Email and password you entered is wrong or not registered!");
			}
		}
	}

	return (
		<div className="login container top">
			<h1>Login</h1>
			<div className="row">
				<div className="col d-flex flex-column align-items-center justify-content-center">
					<form onSubmit={handleSubmit}>
						<h3>Please log in to continue</h3>
						<input type="email" placeholder="Email" className="form-control mt-4" required value={email} onChange={(e) => setEmail(e.target.value)} />
						<input
							type="password"
							placeholder="Password"
							className="form-control"
							required
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<label className="form-label fw-bold">Login as Patient/Doctor :</label>
						<select name="role" className="form-control" required value={role} onChange={(e) => setRole(e.target.value)}>
							<option value="patient">Patient</option>
							<option value="doctor">Doctor</option>
							<option value="admin">Admin</option>
						</select>
						<button className="mt-3">Login</button>
						<div className="error">{error}</div>
					</form>
				</div>
				<div className="col">
					<img src="assets/general/login.png" alt="" className="img-fluid" />
				</div>
			</div>
		</div>
	);
}
