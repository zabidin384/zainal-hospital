import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../config";
import Sidebar from "../../components/Sidebar";

export default function AdminAccountDetails({ token }) {
	const [isEdit, setIsEdit] = useState(false);
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");
	const [profiles, setProfiles] = useState([]);
	const [firstName, setFirstName] = useState(profiles && profiles.firstName);
	const [lastName, setLastName] = useState(profiles.lastName);
	const [email, setEmail] = useState(profiles.email);
	const [mobileNumber, setMobileNumber] = useState(profiles.mobileNumber);

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
		<div className="adminAccountDetails top container-fluid">
			<div className="row">
				<div className="col-2 accountDetailsLeft ps-0">
					<Sidebar />
				</div>
				<div className="col">
					<h1>My Profile - Admin</h1>
					{isEdit ? (
						<div className="row">
							<div className="col">
								<div className="text-center">
									<div className="text-center mt-5">
										<img src="assets/admin/admin-profile.png" alt="" />
									</div>
								</div>
							</div>

							<div className="col pe-5">
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
							<div className="col">
								<h2>My Profile</h2>
								<div className="text-center">
									<div className="text-center my-5">
										<img src="assets/admin/admin-profile.png" alt="" />
									</div>
								</div>
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
			</div>
		</div>
	);
}
