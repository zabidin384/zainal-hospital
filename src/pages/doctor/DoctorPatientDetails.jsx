import React from "react";
import Diagnosis from "../../components/Diagnosis";

export default function DoctorPatientDetails() {
	return (
		<div className="doctorPatientDetails container top">
			<h1>Patient Details</h1>
			<div className="row d-flex align-items-center">
				<div className="col-4">
					<img src="assets/doctor/patient-details.png" alt="" />
				</div>
				<div className="col">
					<div className="patientName fw-bold">Name - Surname</div>
					<div className="patientGender">Female</div>
					<div className="patientAge">27 years</div>
					<div className="patientDetails">address + other details</div>
				</div>
			</div>

			<div className="patientDiagnosis">
				<h2>Diagnosis</h2>
				<div className="diagnosiss d-flex justify-content-between flex-wrap">
					<Diagnosis />
					<Diagnosis />
					<Diagnosis />
				</div>
				<div className="text-center">
					<button className="mt-3">Add a diagnosis</button>
				</div>
			</div>
		</div>
	);
}
