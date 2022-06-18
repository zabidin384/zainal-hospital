import React from "react";

export default function Sidebar() {
	return (
		<div className="sidebar ps-4 pt-3">
			<div>
				<img src="assets/admin/dashboard.png" alt="" /> Dashboard
			</div>
			<div>
				<img src="assets/admin/patient.png" alt="" /> Patients
			</div>
			<div>
				<img src="assets/admin/doctor.png" alt="" /> Doctors
			</div>
			<div>
				<img src="assets/admin/post.png" alt="" /> Posts
			</div>
		</div>
	);
}
