import React from "react";

export default function DoctorPatients() {
	return (
		<div className="doctorPatients container top">
			<h1>My Patients</h1>
			<div className="text-end">Show 10 appointments</div>
			<table className="table mt-5">
				<thead>
					<tr className="table-secondary">
						<th scope="col">id</th>
						<th scope="col">First and Last name</th>
						<th scope="col">Last Appointment</th>
						<th scope="col">Diagnosis</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Patient 1</td>
						<td>10/10/2020</td>
						<td>
							<button>Read all details</button>
						</td>
					</tr>
					<tr>
						<td>1</td>
						<td>Patient 1</td>
						<td>10/10/2020</td>
						<td>
							<button>Read all details</button>
						</td>
					</tr>
					<tr>
						<td>1</td>
						<td>Patient 1</td>
						<td>10/10/2020</td>
						<td>
							<button>Read all details</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
