import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../config";

export default function AccountDetails({ token }) {
	const [isEdit, setIsEdit] = useState(false);
	const [error, setError] = useState("");
	const [error2, setError2] = useState("");
	const [success, setSuccess] = useState("");
	const [profiles, setProfiles] = useState([]);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [mobileNumber, setMobileNumber] = useState("");
	const [pic, setPic] = useState("");

	// Get data profile
	token &&
		useEffect(() => {
			const fetchProfiles = async () => {
				try {
					axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
					const res = await axiosInstance.get("/users");
					setProfiles(res.data);
				} catch (error) {
					if (error.response.status === 403) {
						localStorage.removeItem("jwt");
						window.location.replace("/login");
					}
				}
			};
			fetchProfiles();
		}, [success]);

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
		setError2("");

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

	// Update Photo Profile
	async function handleUpdatePP(e) {
		e.preventDefault();
		setError("");
		setSuccess("");
		setError2("");

		const fd = new FormData();
		fd.append("pic", pic, pic.name);

		try {
			axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
			const res = await axiosInstance.post("/users/profile-picture", fd);
			setIsEdit(false);
			setPic("");
			window.location.replace("/account-details");
			res && console.log(res);
		} catch (err) {
			if (err.response) {
				setError2("You failed to update your photo profile!");
				console.log(err.response);
			}
		}
	}

	return (
		<div className="adminAccountDetails top container-fluid">
			<h1>My Profile</h1>
			{isEdit ? (
				<div className="row">
					<div className="col">
						<h2>Change Photo Profile</h2>
						<div className="text-center">
							<div className="text-center mt-5">
								{!profiles.profilePicture ? <img src="assets/admin/admin-profile.png" alt="" /> : <img className="imgPP" src={`data:image/png;base64,${profiles.profilePicture}`} alt="" />}
							</div>
							<div className="d-flex gap-2 justify-content-center mt-3">
								<input className="border-0 d-flex m-0 align-items-center" type="file" id="fileInput" accept=".png, .jpg, .jpeg" name="pic" onChange={(e) => setPic(e.target.files[0])} />
								{pic && <button onClick={handleUpdatePP}>Update</button>}
								<button onClick={() => setIsEdit(false)} className="me-3">
									Cancel
								</button>
							</div>
							<div className="error">{error2}</div>
						</div>
					</div>

					<div className="col pe-5">
						<form onSubmit={handleUpdate}>
							<h2>Change Account Details</h2>
							<label className="form-label">
								<b>First Name</b> :
							</label>
							<input type="text" className="form-control" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
							<label className="form-label">
								<b>Last Name</b> :
							</label>
							<input type="text" placeholder="Last Name" className="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
							<label className="form-label">
								<b>Email address</b> :
							</label>
							<input type="email" placeholder="Email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
							<label className="form-label">
								<b>Mobile number</b> :
							</label>
							<input type="text" placeholder="Mobile Number" className="form-control" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} required />
							<div className="text-center">
								<button onClick={() => setIsEdit(false)} className="me-3">
									Cancel
								</button>
								<button>Update My Profile</button>
							</div>
							<div className="error">{error}</div>
						</form>
					</div>
				</div>
			) : (
				<div className="row">
					<div className="col">
						<h2>My Photo Profile</h2>
						<div className="text-center">
							<div className="text-center my-5">
								{profiles.profilePicture ? <img className="imgPP" src={`data:image;base64,${profiles.profilePicture}`} alt="" /> : <img src="assets/general/profile.png" alt="" />}
							</div>
						</div>
					</div>
					{profiles.firstName ? (
						<div className="col">
							<h2 className="text-start mb-5">My Account Details</h2>
							<p>
								<b>First Name</b> : {profiles.firstName}
							</p>
							<p>
								<b>Last Name</b> : {profiles.lastName}
							</p>
							<p>
								<b>Email</b> : {profiles.email}
							</p>
							<p>
								<b>Mobile Number</b> : {profiles.mobileNumber}
							</p>
							<button onClick={() => setIsEdit(true)}>Edit My Profile</button>
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
