import React from "react";
import { Link } from "react-router-dom";

export default function DoctorPatients({ patients }) {
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
					{patients.content ? (
						patients.content.map((patient) => (
							<tr key={patient.id}>
								<td>{patient.id}</td>
								<td>
									{patient.firstName} {patient.lastName}
								</td>
								<td>{patient.lastAppointment ? patient.lastAppointment : "-"}</td>
								<td>
									<Link to={`/patient-details=${patient.id}`}>
										<button>Read all details</button>
									</Link>
								</td>
							</tr>
						))
					) : (
						<tr>
							<td colSpan={4} className="fw-bold text-center">
								Loading the data...
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
}
