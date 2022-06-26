import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../config";

export default function PatientDiagnosis({ token }) {
	const [diagnosis, setDiagnosis] = useState("");

	token &&
		useEffect(() => {
			const fetchDiagnosis = async () => {
				axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
				const res = await axiosInstance.get("/diagnose");
				setDiagnosis(res.data);
			};
			fetchDiagnosis();
		}, []);

	return (
		<div className="patientDiagnosis container top">
			<h1>My Diagnosis</h1>
			{diagnosis ? diagnosis.map((d, i) => <p key={i}>{d.diagnose}</p>) : <h5 className="text-center">Loading the data...</h5>}
		</div>
	);
}
