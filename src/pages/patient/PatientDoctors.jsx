import React from "react";
import Doctor from "../../components/Doctor";

export default function PatientDoctors({ doctors }) {
	return (
		<div className="top">
			<div className="text-center">
				<img src="assets/patient/doctors.jpeg" alt="" className="imgDoctors" />
			</div>

			<div className="container">
				<h1>Our Professional Team</h1>
// 				<div className="d-flex justify-content-center position-relative">
// 					<input type="text" className="patientDoctorsInput form-control position-absolut m-0 rounded-4" />
// 					<i className="bi bi-search" />
// 				</div>

				<div className="doctorsTeam d-flex justify-content-between flex-wrap">
					<Doctor doctors={doctors} />
				</div>
			</div>
		</div>
	);
}
