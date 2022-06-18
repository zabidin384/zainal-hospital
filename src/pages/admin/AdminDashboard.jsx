import React from "react";
import Sidebar from "../../components/Sidebar";

export default function AdminDashboard() {
	return (
		<div className="adminDashboard top container">
			<div className="row">
				<div className="col-2 adminDashboardLeft">
					<Sidebar />
				</div>

				<div className="col d-flex container flex-wrap justify-content-center adminDashboardRight">
					<div className="d-flex flex-row justify-content-around align-items-center card">
						<div>
							<img src="assets/admin/patient.png" alt="" />
						</div>
						<div>
							<div>Total Patient</div>
							<div className="text-center">250</div>
						</div>
					</div>

					<div className="d-flex flex-row justify-content-around align-items-center card">
						<div>
							<img src="assets/admin/doctor.png" alt="" />
						</div>
						<div>
							<div>Total Patient</div>
							<div className="text-center">250</div>
						</div>
					</div>

					<div className="d-flex flex-row justify-content-around align-items-center card">
						<div>
							<img src="assets/admin/post.png" alt="" />
						</div>
						<div>
							<div>Total Patient</div>
							<div className="text-center">250</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
