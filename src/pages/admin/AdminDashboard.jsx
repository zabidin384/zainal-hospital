import React from "react";
import Sidebar from "../../components/Sidebar";

export default function AdminDashboard({ patients, doctors, posts }) {
	return (
		<div className="adminDashboard container-fluid top">
			<div className="row">
				<div className="col-2 adminDashboardLeft ps-0">
					<Sidebar />
				</div>

				<div className="col d-flex container flex-wrap justify-content-center adminDashboardRight">
					<div className="d-flex flex-row justify-content-around align-items-center card">
						<div>
							<img src="assets/admin/patient.png" alt="" />
						</div>
						<div>
							<div>Total Patient :</div>
							<div className="text-center">{patients && patients.totalElements}</div>
						</div>
					</div>

					<div className="d-flex flex-row justify-content-around align-items-center card">
						<div>
							<img src="assets/admin/doctor.png" alt="" />
						</div>
						<div>
							<div>Total Doctor :</div>
							<div className="text-center">{doctors && doctors.totalElements}</div>
						</div>
					</div>

					<div className="d-flex flex-row justify-content-around align-items-center card">
						<div>
							<img src="assets/admin/post.png" alt="" />
						</div>
						<div>
							<div>Total Post :</div>
							<div className="text-center">{posts.totalElements ? posts.totalElements : "0"}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
