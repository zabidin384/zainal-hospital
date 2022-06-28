import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

export default function AdminPatients({ patients }) {
	return (
		<div className="AdminPatients top container-fluid admin">
			<div className="row">
				<div className="col-2 ps-0">
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
							{patients.content ? (
								patients.content.map((patient) => (
									<tr key={patient.id}>
										<td>
											{patient.firstName} {patient.lastName}
										</td>
										<td>{patient.email}</td>
										<td>{patient.lastAppointment ? patient.lastAppointment : "-"}</td>
										<td>
											<Link to={`/patient-details=${patient.id}`}>
												<button className="btn-sm">Read more</button>
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
			</div>
		</div>
	);
}
