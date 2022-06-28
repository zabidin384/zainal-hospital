import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../config";

export default function DoctorAccountDetails({ token }) {
	const [isEdit, setIsEdit] = useState(false);
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");
	const [profiles, setProfiles] = useState([]);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [mobileNumber, setMobileNumber] = useState("");

	// Get data profile
	token &&
		useEffect(() => {
			const fetchProfiles = async () => {
				axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
				const res = await axiosInstance.get("/users");
				setProfiles(res.data);
			};
			fetchProfiles();
		}, [success]);

	profiles &&
		useEffect(() => {
			setFirstName(profiles.firstName);
			setLastName(profiles.lastName);
			setEmail(profiles.email);
			setMobileNumber(profiles.mobileNumber);
		}, [isEdit]);

	// Update data profile
	async function handleUpdate(e) {
		e.preventDefault();
		setError("");
		setSuccess("");

		try {
			axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
			const res = await axiosInstance.put("/users", {
				firstName,
				lastName,
				email,
				mobileNumber,
			});
			setIsEdit(false);
			res && setSuccess("Your account has been updated successfully!");
			console.log(res);
		} catch (err) {
			if (err.response) {
				setError("You failed to update your profile account!");
				console.log(err.response);
			}
		}
	}

	return (
		<div className="doctorAccountDetails container top">
			<h1>My Profile - Doctor</h1>
			{isEdit ? (
				<div className="row">
					<div className="col text-center">
						<img src="assets/doctor/doctor.png" alt="" className="mb-5" />
					</div>
					<div className="col">
						<form onSubmit={handleUpdate}>
							<h2>Edit My Account Details</h2>
							<label className="form-label">First Name :</label>
							<input
								type="text"
								className="form-control"
								placeholder="First Name"
								value={firstName}
								onChange={(e) => setFirstName(e.target.value)}
								required
							/>
							<label className="form-label">Last Name :</label>
							<input
								type="text"
								placeholder="Last Name"
								className="form-control"
								value={lastName}
								onChange={(e) => setLastName(e.target.value)}
								required
							/>
							<label className="form-label">Email address :</label>
							<input
								type="email"
								placeholder="Email"
								className="form-control"
								value={profiles.email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
							<label className="form-label">Mobile number :</label>
							<input
								type="text"
								placeholder="Mobile Number"
								className="form-control"
								value={mobileNumber}
								onChange={(e) => setMobileNumber(e.target.value)}
								required
							/>
							<div className="text-center">
								<button onClick={() => setIsEdit(false)} className="me-3">
									Cancel
								</button>
								<button>Update My Profile</button>
							</div>
						</form>
					</div>
				</div>
			) : (
				<div className="row">
					<div className="col text-center">
						<img src="assets/doctor/doctor.png" alt="" className="mb-5" />
					</div>
					{profiles.firstName ? (
						<div className="col">
							<h2 className="text-start">My Account Details</h2>
							<p>First Name : {profiles.firstName}</p>
							<p>Last Name : {profiles.lastName}</p>
							<p>Email : {profiles.email}</p>
							<p>Mobile Number : {profiles.mobileNumber}</p>
							<button onClick={() => setIsEdit(true)}>Edit My Profile</button>
							<div className="error">{error}</div>
							<div className="success">{success}</div>
						</div>
					) : (
						<div className="col">
							<h5>Loading the data...</h5>
						</div>
					)}
				</div>
			)}
		</div>
	);
}
