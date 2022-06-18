import React from "react";

export default function PatientProfile() {
	return (
		<div className="patientProfile container top">
			<h1>My Profile</h1>
			<div className="row">
				<div className="col text-center">
					<img src="assets/doctor/doctor.png" alt="" className="mb-5" />
					<br />
					<img src="assets/doctor/profile-edit.png" alt="" />
					<h5>Edit profile photo</h5>
				</div>
				<div className="col">
					<form>
						<h2>Edit My Account Details</h2>
						<input type="text" placeholder="First Name" className="form-control" />
						<input type="text" placeholder="Last Name" className="form-control" />
						<input type="email" placeholder="Email" className="form-control" />
						<input type="text" placeholder="Mobile Number" className="form-control" />
						<div className="text-center">
							<button>Save My Profile</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
