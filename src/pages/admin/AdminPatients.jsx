import React from "react";
import Sidebar from "../../components/Sidebar";

export default function AdminPatients() {
	return (
		<div className="AdminPatients top container">
			<div className="row">
				<div className="col-2">
					<Sidebar />
				</div>
				<div className="col">
					<h1>All List of Patients</h1>
					<table className="table mt-5 table-hover">
						<thead>
							<tr className="table-secondary">
								<th scope="col">First and Last Name</th>
								<th scope="col">Email</th>
								<th scope="col">Last Appointment</th>
								<th scope="col">Details</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<img src="assets/admin/admin-patient.png" alt="" /> Patient 1
								</td>
								<td>patient@gmail.com</td>
								<td>10/10/2020</td>
								<td>
									<button className="btn-sm">Read more</button>
								</td>
							</tr>
							<tr>
								<td>
									<img src="assets/admin/admin-patient.png" alt="" /> Patient 2
								</td>
								<td>patient@gmail.com</td>
								<td>10/10/2020</td>
								<td>
									<button className="btn-sm">Read more</button>
								</td>
							</tr>
							<tr>
								<td>
									<img src="assets/admin/admin-patient.png" alt="" /> Patient 3
								</td>
								<td>patient@gmail.com</td>
								<td>10/10/2020</td>
								<td>
									<button className="btn-sm">Read more</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
