import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../config";

export default function DoctorAppointments({ token }) {
	const [appointments, setAppointments] = useState([]);
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");

	// Get Single Doctor Appointment
	token &&
		useEffect(() => {
			const fetchAppointments = async () => {
				axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
				const res = await axiosInstance.get("/users/appointment");
				setAppointments(res.data);
			};
			fetchAppointments();
		}, [success]);

	// Approve Appointment
	async function handleApprove(e, id) {
		e.preventDefault();
		setError("");
		setSuccess("");

		try {
			axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
			const res = await axiosInstance.put(`/slots/appointment/approve/${id}`, {});
			res && setSuccess("The appointment has been approved!");
			console.log(res);
		} catch (err) {
			if (err.response) {
				setError("You failed to approve the appointment!");
				console.log(err.response);
			}
		}
	}

	// Decline Appointment
	async function handleDecline(e, id) {
		e.preventDefault();
		setError("");
		setSuccess("");

		try {
			axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
			const res = await axiosInstance.put(`/slots/appointment/decline/${id}`, {});
			res && setSuccess("The appointment has been declined!");
			console.log(res);
		} catch (err) {
			if (err.response) {
				setError("You failed to decline the appointment!");
				console.log(err.response);
			}
		}
	}

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
						<th scope="col">Status</th>
						<th scope="col" className="text-center">
							Action
						</th>
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
								<td>{appointment.status}</td>
								{appointment.status === "PENDING_APPROVAL" ? (
									<td className="text-center">
										<i className="bi bi-check-lg icon-green" onClick={(e) => handleApprove(e, appointment.id)} />{" "}
										<span className="icon-red" onClick={(e) => handleDecline(e, appointment.id)}>
											x
										</span>
									</td>
								) : (
									<td className="text-center">-</td>
								)}
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
			<div className="error">{error}</div>
			<div className="success">{success}</div>
		</div>
	);
}
