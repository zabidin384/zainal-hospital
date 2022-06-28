import React, { useEffect, useState } from "react";
import Diagnosis from "../../components/Diagnosis";
import { useLocation } from "react-router-dom";
import { axiosInstance } from "../../config";

export default function DoctorPatientDetails({ token }) {
	const [patient, setPatient] = useState([]);
	const [diagnose, setDiagnose] = useState([]);
	const [newDiagnose, setNewDiagnose] = useState();
	const [isAdd, setIsAdd] = useState(false);
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");
	const location = useLocation();
	const id = location.pathname.split("=")[1];

	// Get Patient Details
	useEffect(() => {
		const fetchPatient = async () => {
			axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
			const res = await axiosInstance.get(`/users/patient-details/${id}`);
			setPatient(res.data);
		};
		fetchPatient();
	}, []);

	// Get Diagnose Patient
	useEffect(() => {
		const fetchDiagnose = async () => {
			axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
			const res = await axiosInstance.get(`/diagnose/patient/${id}`);
			setDiagnose(res.data);
		};
		fetchDiagnose();
	}, [success]);

	// Post New Diagnose
	async function handleSubmit(e) {
		e.preventDefault();
		setError("");
		setSuccess("");

		try {
			axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
			const res = await axiosInstance.post("/diagnose", {
				patientId: id,
				diagnose: newDiagnose,
			});
			setIsAdd(false);
			res && setSuccess("New diagnose has been add successfully!");
			console.log(res);
		} catch (err) {
			if (err.response) {
				setError("You failed to add new diagnose!");
				console.log(err.response);
			}
		}
	}

	return (
		<div className="doctorPatientDetails container top pb-5">
			<h1>Patient Details</h1>
			<div className="row d-flex align-items-center">
				<div className="col-4">
					<img src="assets/patient/patient.png" alt="" className="imgPatient" />
				</div>
				{patient ? (
					<div className="col lh-lg">
						<div>
							<b>Full Name</b> : {patient.firstName} {patient.lastName}
						</div>
						<div>
							<b>Gender</b> : {patient.gender ? patient.gender : "-"}
						</div>
						<div>
							<b>Date of Birth</b> : {patient.dateOfBirth ? patient.dateOfBirth : "-"}
						</div>
						<div>
							<b>Mobile Number</b> : {patient.mobileNumber}
						</div>
						<div>
							<b>Email</b> : {patient.email}
						</div>
					</div>
				) : (
					<h5 className="text-center">Loading the post...</h5>
				)}
			</div>

			<div className="patientDiagnosis">
				<h2>Diagnosis</h2>
				<div className="d-flex justify-content-between">
					<Diagnosis diagnose={diagnose} />
				</div>
				<div className="text-center mb-5">
					<button className="mt-3" onClick={() => setIsAdd(true)}>
						Add a diagnosis
					</button>
					<div className="error">{error}</div>
					<div className="success">{success}</div>
				</div>

				{isAdd && (
					<form onSubmit={handleSubmit} className="text-center">
						<label className="form-label">Write new diagnosis for this patient :</label>
						<div className="d-flex justify-content-center">
							<textarea
								rows="4"
								placeholder="New diagnosis..."
								className="form-control my-3 w-50"
								required
								value={newDiagnose}
								onChange={(e) => setNewDiagnose(e.target.value)}
							/>
						</div>
						<button>Post New Diagnosis</button>
					</form>
				)}
			</div>
		</div>
	);
}
