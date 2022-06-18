import React from "react";
import Sidebar from "../../components/Sidebar";

export default function AdminSchedules() {
	return (
		<div className="adminSchedules top container">
			<div className="row">
				<div className="col-2 adminSchedulesLeft">
					<Sidebar />
				</div>

				<div className="col adminSchedulesRight">
					<div className="row p-4 mx-5 bg-secondary bg-opacity-25">
						<div className="col-5 text-center">
							<div className="bg-light scheduleBgPhoto d-flex justify-content-center align-items-center">
								<img src="assets/admin/admin-doctor.png" alt="" />
							</div>
							<h5>Name - Surname</h5>
							<div>Male</div>
							<div>27 years</div>
							<div>Adress + other details</div>
						</div>
						<div className="col">Nothing!</div>
					</div>
				</div>
			</div>
		</div>
	);
}
