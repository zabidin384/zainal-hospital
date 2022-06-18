import React from "react";
import Doctor from "../../components/Doctor";

export default function PatientDoctors() {
	return (
		<div className="container-fluid top">
			<div className="text-center">
				<img src="assets/patient/image21.png" alt="" />
			</div>

			<div className="container">
				<h1>Our Professional Team</h1>
				<div className="text-center">
					<input type="text" className="patientDoctorsInput" />
				</div>

				<div className="doctorsTeam d-flex justify-content-between flex-wrap">
					<Doctor />
					<Doctor />
					<Doctor />
					<Doctor />
					<Doctor />
					<Doctor />
					<Doctor />
					<Doctor />
					<Doctor />
				</div>
			</div>
		</div>
	);
}
