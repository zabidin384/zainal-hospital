import React from "react";
import Sidebar from "../../components/Sidebar";

export default function AdminAccountDetails() {
	return (
		<div className="adminAccountDetails top container">
			<div className="row">
				<div className="col-2 accountDetailsLeft">
					<Sidebar />
				</div>
				<div className="col">
					<h1>My Profile</h1>

					<div className="row">
						<div className="col">
							<h2>Edit My Profile</h2>
							<div className="card text-center">
								<div className="text-center mt-5">
									<img src="assets/admin/admin-profile.png" alt="admin-profile" />
								</div>
								<div className="card-body">
									<div className="card-icon">
										<img src="assets/admin/admin-edit-profile.png" alt="" />
									</div>
									<h5 className="card-title">Edit Profile Photo</h5>
								</div>
							</div>
						</div>

						<div className="col pe-5">
							<h2 className="text-center">Edit My Account Details</h2>
							<input type="text" placeholder="First Name" className="form-control" />
							<input type="text" placeholder="Last Name" className="form-control" />
							<input type="text" placeholder="Email" className="form-control" />
							<input type="text" placeholder="Mobile Number" className="form-control" />
							<div className="text-center">
								<button>Save my profile</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
