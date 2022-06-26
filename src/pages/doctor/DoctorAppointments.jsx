import React from "react";

export default function DoctorAppointments({ appointments }) {
	return (
		<div className="doctorAppointments container top">
			<h1>Appointments</h1>
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
					{appointments.content ? (
						appointments.content.map((appointment) => (
							<tr key={appointment.id}>
								<td>
									<img src="assets/doctor/patient-profile.png" alt="" /> {appointment.patient.firstName}
								</td>
								<td>{appointment.patient.email}</td>
								<td>{appointment.date}</td>
								<td>{appointment.slot.timeSlot}</td>
								<td>
									<i className="bi bi-check-lg icon-green"></i> <i className="bi bi-trash-fill icon-red"></i>
								</td>
							</tr>
						))
					) : (
						<tr>
							<td colSpan={5} className="fw-bold text-center">
								Loading the data...
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
}
