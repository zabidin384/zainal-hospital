import React from "react";
import Sidebar from "../../components/Sidebar";

export default function AdminDoctors() {
	return (
		<div className="AdminDoctors top container">
			<div className="row">
				<div className="col-2">
					<Sidebar />
				</div>
				<div className="col">
					<h1>All List of Doctors</h1>
					<input type="text" placeholder="Search name of the doctor..." className="form-control" />
					<table className="table mt-5 table-hover">
						<thead>
							<tr className="table-secondary">
								<th scope="col"></th>
								<th scope="col">First and Last Name</th>
								<th scope="col">Email</th>
								<th scope="col">Date of Birth</th>
								<th scope="col">Experiences</th>
								<th scope="col">Schedules</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<div className="form-check">
										<input type="checkbox" className="form-check-input" />
									</div>
								</td>
								<td>Doctor 1</td>
								<td>doctor1@gmail.com</td>
								<td>10/10/1970</td>
								<td>Neurologist</td>
								<td>
									<button className="btn-sm">See the schedule</button>
								</td>
							</tr>
							<tr>
								<td>
									<div className="form-check">
										<input type="checkbox" className="form-check-input" />
									</div>
								</td>
								<td>Doctor 2</td>
								<td>doctor2@gmail.com</td>
								<td>10/10/1970</td>
								<td>Neurologist</td>
								<td>
									<button className="btn-sm">See the schedule</button>
								</td>
							</tr>
							<tr>
								<td>
									<div className="form-check">
										<input type="checkbox" className="form-check-input" />
									</div>
								</td>
								<td>Doctor 3</td>
								<td>doctor3@gmail.com</td>
								<td>10/10/1970</td>
								<td>Neurologist</td>
								<td>
									<button className="btn-sm">See the schedule</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
