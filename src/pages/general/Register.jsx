import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../config";

export default function Register() {
	const [doctor, setDoctor] = useState(false);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [mobileNumber, setMobileNumber] = useState("");
	const [gender, setGender] = useState("male");
	const [date, setDate] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();

	async function handleSubmit(e) {
		e.preventDefault();
		setError("");

		if (confirmPassword === password) {
			try {
				await axiosInstance.post("/auth/signup", {
					firstName,
					lastName,
					date,
					gender,
					mobileNumber,
					email,
					password,
					doctor,
				});
				navigate("/login", { replace: true });
			} catch (err) {
				if (err.response) {
					setError("Your registration failed!");
				}
			}
		} else {
			setError("Password doesn't match!");
		}
	}

	return (
		<div className="register container top">
			<form onSubmit={handleSubmit}>
				<h1>Register</h1>
				<h3>Please register to continue</h3>
				<div className="chooseRole text-center mx-auto mb-4">
					<label className="form-label fw-bold mt-5">Register as Patient/Doctor :</label>
					<br />
					<div className="d-flex justify-content-center">
						<select className="form-control w-25" name="role" required value={doctor} onChange={(e) => setDoctor(e.target.value)}>
							<option value={false}>Patient</option>
							<option value={true}>Doctor</option>
						</select>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<label className="form-label">First Name :</label>
						<input
							type="text"
							placeholder="First Name"
							className="form-control"
							required
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
						/>
						<label className="form-label">Last Name :</label>
						<input
							type="text"
							placeholder="Last Name"
							className="form-control"
							required
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
						/>
						<label className="form-label">Email address :</label>
						<input type="email" placeholder="Email" className="form-control" required value={email} onChange={(e) => setEmail(e.target.value)} />
						<label className="form-label">Input your mobile number :</label>
						<input
							type="text"
							placeholder="Mobile Number"
							className="form-control"
							required
							value={mobileNumber}
							onChange={(e) => setMobileNumber(e.target.value)}
						/>
					</div>
					<div className="col registerRight">
						<label className="form-label">Select your gender :</label>
						<select name="gender" className="form-control" required value={gender} onChange={(e) => setGender(e.target.value)}>
							<option value="male">Male</option>
							<option value="female">Female</option>
						</select>
						<label className="form-label">Choose your birthday :</label>
						<input type="date" placeholder="Date of Birth" className="form-control" required value={date} onChange={(e) => setDate(e.target.value)} />

						<label className="form-label">Password :</label>
						<input
							type="password"
							placeholder="Password"
							className="form-control"
							required
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<label className="form-label">Confirm your password :</label>
						<input
							type="password"
							placeholder="Confirm Password"
							className="form-control"
							required
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
						/>
					</div>
				</div>
				<div className="text-center">
					<button>Register</button>
					<div className="error">{error}</div>
				</div>
			</form>
		</div>
	);
}
