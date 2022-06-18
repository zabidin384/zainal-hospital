import React from "react";

export default function DoctorAppointments() {
	return (
		<div className="doctorAppointments container top">
			<h1>Appointments</h1>
			<div className="text-end">Show 10 appointments</div>
			<table className="table mt-5">
				<thead>
					<tr className="table-secondary">
						<th scope="col">Name</th>
						<th scope="col">Email</th>
						<th scope="col">Date</th>
						<th scope="col">Visit Time</th>
						<th scope="col">Action</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<img src="assets/doctor/patient-profile.png" alt="" /> Leslie Alexander
						</td>
						<td>leslie.alexander@example.com</td>
						<td>10/10/2020</td>
						<td>8:00 - 8:30 am</td>
						<td>
							<i className="bi bi-check-lg icon-green"></i> <i className="bi bi-trash-fill icon-red"></i>
						</td>
					</tr>
					<tr>
						<td>
							<img src="assets/doctor/patient-profile.png" alt="" /> Leslie Alexander
						</td>
						<td>leslie.alexander@example.com</td>
						<td>10/10/2020</td>
						<td>8:00 - 8:30 am</td>
						<td>
							<i className="bi bi-check-lg icon-green"></i> <i className="bi bi-trash-fill icon-red"></i>
						</td>
					</tr>
					<tr>
						<td>
							<img src="assets/doctor/patient-profile.png" alt="" /> Leslie Alexander
						</td>
						<td>leslie.alexander@example.com</td>
						<td>10/10/2020</td>
						<td>8:00 - 8:30 am</td>
						<td>
							<i className="bi bi-check-lg icon-green"></i> <i className="bi bi-trash-fill icon-red"></i>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
