import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ user, setUser, role, id }) {
	function handleLogout() {
		localStorage.removeItem("jwt");
		setUser("");
	}

	return (
		<nav className="navbar d-flex bg-light container-fluid position-fixed">
			<div className="container">
				<div>
					<Link to="/menu" className="d-flex align-items-center gap-3">
						<img src="assets/general/logo.png" alt="" />
						<div className="fw-bold">
							Qendra Klinike <br /> Universitare e Kosoves QKUK
						</div>
					</Link>
				</div>
				{role === "ROLE_PATIENT" ? (
					<ul className="d-flex list-unstyled justify-content-space-between align-items-center gap-2">
						<li>
							<Link to="/">
								<i className="bi bi-house-fill" /> Home
							</Link>
						</li>
						<li>
							<Link to="/about">
								<i className="bi bi-info-circle-fill" /> About
							</Link>
						</li>
						<li>
							<Link to="/articles">
								<i className="bi bi-newspaper" /> Articles
							</Link>
						</li>
						<li>
							<Link to="/patient-appointment">
								<i className="bi bi-hand-index-thumb-fill" /> Appointment
							</Link>
						</li>
						<li>
							<Link to="/patient-diagnosis">
								<i className="bi bi-clipboard2-pulse-fill" /> Diagnosis
							</Link>
						</li>
						<li>
							<Link to="/patient-doctors">
								<i className="bi bi-people-fill" /> Doctors
							</Link>
						</li>
						<li>
							<Link to="/patient-account-details" className="d-flex align-items-center gap-2">
								<img src="/assets/patient/patient.png" alt="" className="avatar" />
								<div>{user}</div>
							</Link>
						</li>
						<li>
							<a href="/login">
								<i className="bi bi-box-arrow-in-left logout" onClick={handleLogout} />
							</a>
						</li>
					</ul>
				) : role === "ROLE_DOCTOR" ? (
					<ul className="d-flex list-unstyled justify-content-space-between align-items-center gap-2">
						<li>
							<Link to="/">
								<i className="bi bi-house-fill" /> Home
							</Link>
						</li>
						<li>
							<Link to="/about">
								<i className="bi bi-info-circle-fill" /> About
							</Link>
						</li>
						<li>
							<Link to="/articles">
								<i className="bi bi-newspaper" /> Articles
							</Link>
						</li>
						<li>
							<Link to="/doctor-appointments">
								<i className="bi bi-hand-index-thumb-fill" /> Appointments
							</Link>
						</li>
						<li>
							<Link to={`/doctor-posts%${id}`}>
								<i className="bi bi-clipboard2-pulse-fill" /> Posts
							</Link>
						</li>
						<li>
							<Link to="/doctor-patients">
								<i className="bi bi-people-fill" /> Patients
							</Link>
						</li>
						<li>
							<Link to="/doctor-account-details" className="d-flex align-items-center gap-2">
								<img src="/assets/doctor/doctors.webp" alt="" className="avatar" />
								<div>{user}</div>
							</Link>
						</li>
						<li>
							<a href="/login">
								<i className="bi bi-box-arrow-in-left logout" onClick={handleLogout} />
							</a>
						</li>
					</ul>
				) : role === "ROLE_ADMIN" ? (
					<ul className="d-flex list-unstyled justify-content-space-between align-items-center gap-4">
						<li>
							<Link to="/">
								<i className="bi bi-house-fill" /> Home
							</Link>
						</li>
						<li>
							<Link to="/about">
								<i className="bi bi-info-circle-fill" /> About
							</Link>
						</li>
						<li>
							<Link to="/articles">
								<i className="bi bi-newspaper" /> Articles
							</Link>
						</li>
						<li>
							<Link to="/admin-dashboard">
								<i className="bi bi-clipboard-check-fill" /> Dashboard
							</Link>
						</li>
						<li>
							<Link to="/admin-account-details" className="d-flex align-items-center gap-2">
								<img src="/assets/admin/admin-profile.png" alt="" className="avatar" />
								<div>{user}</div>
							</Link>
						</li>
						<li>
							<a href="/login">
								<i className="bi bi-box-arrow-in-left logout" onClick={handleLogout} />
							</a>
						</li>
					</ul>
				) : (
					<ul className="d-flex list-unstyled justify-content-space-between align-items-center gap-4">
						<li>
							<Link to="/">
								<i className="bi bi-house-fill" /> Home
							</Link>
						</li>
						<li>
							<Link to="/about">
								<i className="bi bi-info-circle-fill" /> About
							</Link>
						</li>
						<li>
							<Link to="/articles">
								<i className="bi bi-newspaper" /> Articles
							</Link>
						</li>
						<li>
							<Link to="/login">
								<button>Login</button>
							</Link>
						</li>
						<li>
							<Link to="/register">
								<button>Register</button>
							</Link>
						</li>
					</ul>
				)}
			</div>
		</nav>
	);
}
