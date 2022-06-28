import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
	return (
		<div className="sidebar container-fluid d-flex flex-column gap-4 pt-5">
			<Link to="/admin-dashboard">
				<img src="assets/admin/dashboard.png" alt="" className="iconDashboard" /> Dashboard
			</Link>
			<Link to="/admin-patients">
				<img src="assets/admin/patient.png" alt="" className="iconPatient" /> Patients
			</Link>
			<Link to="/admin-doctors">
				<img src="assets/admin/doctor.png" alt="" /> Doctors
			</Link>
			<Link to="/admin-posts">
				<i className="bi bi-newspaper iconAdmin" /> Articles
			</Link>
			<Link to="/admin-schedules">
				<i className="bi bi-calendar-date-fill iconAdmin" /> Schedules
			</Link>
			<Link to="/admin-account-details">
				<i className="bi bi-person-circle iconAdmin" /> Profile
			</Link>
		</div>
	);
}
