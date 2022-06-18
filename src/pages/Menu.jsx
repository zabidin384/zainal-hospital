import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
	return (
		<div className="menu top container">
			<h1>Menu</h1>

			<div className="row">
				<div className="col patient d-flex flex-column">
					<h4>Patient</h4>
					<Link to="/patient-appointment">Appointment</Link>
					<Link to="/patient-disease">Read About Diseases</Link>
					<Link to="/patient-disease-details">Read More About Diseases</Link>
					<Link to="/patient-doctors">Doctors</Link>
					<Link to="/patient-doctors-details">Doctor Details</Link>
					<Link to="/patient-profile">Patient Account Details</Link>
					<Link to="/patient-diagnosis">Diagnosis</Link>
				</div>

				<div className="col doctor d-flex flex-column">
					<h4>Doctor</h4>
					<Link to="/doctor-appointments">Appointments</Link>
					<Link to="/doctor-account-details">Doctor Account Details</Link>
					<Link to="/doctor-posts">Posts</Link>
					<Link to="/doctor-patients">Patients</Link>
					<Link to="/doctor-patient-details">Patients Details</Link>
				</div>

				<div className="col admin d-flex flex-column">
					<h4>Doctor</h4>
					<Link to="/admin-dashboard">Admin Dashboard</Link>
					<Link to="/admin-account-details">Admin Account Details</Link>
					<Link to="/admin-patients">Patients</Link>
					<Link to="/admin-doctors">Doctors</Link>
					<Link to="/admin-schedules">Schedule</Link>
					<Link to="/admin-posts">Posts</Link>
				</div>
			</div>
		</div>
	);
}
