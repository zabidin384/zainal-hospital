import React from "react";
import Disease from "../../components/Disease";

export default function PatientDisease() {
	return (
		<div className="PatientDisease text-center top container">
			<h1>Info About Diseases</h1>
			<div className="PatientDiseaseItem d-flex gap-3 mb-3">
				<Disease />
				<Disease />
				<Disease />
			</div>
		</div>
	);
}
