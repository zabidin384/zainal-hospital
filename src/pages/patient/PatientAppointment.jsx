import React from "react";

export default function patientAppointment() {
	return (
		<div className="patientAppointment container top">
			<h1>Make an Appointment</h1>
			<label className="form-label">Choose your doctor:</label>
			<select name="doctor" className="d-block form-control ms-0">
				<option value="A">Dr. A</option>
				<option value="B">Dr. B</option>
				<option value="C">Dr. C</option>
			</select>
			<label className="form-label mt-4">Input your date and time appointment:</label>
			<div>
				<input type="date" placeholder="Appointment Date" className="ms-0 mt-0" />
				<input type="text" placeholder="Appointment Time" className="mt-0" />
			</div>
			<textarea name="description" cols="30" rows="10" placeholder="Description"></textarea>
			<br />
			<button className="mt-3 ms-5">Apply Appointment</button>
		</div>
	);
}
