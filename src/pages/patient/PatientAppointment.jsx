import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../config";

export default function patientAppointment({ doctors, token }) {
	const [doctorId, setDoctorId] = useState("");
	const [date, setDate] = useState("");
	const [description, setDescription] = useState("");
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");
	const [slots, setSlots] = useState("");
	const [slotNumber, setSlotNumber] = useState("");

	useEffect(() => {
		async function handleDateTime() {
			try {
				const res = await axiosInstance.post("/slots", {
					doctorId,
					date,
				});
				setSlots(res.data);
			} catch (err) {
				if (err.response) {
					console.log(err.response);
				}
			}
		}
		handleDateTime();
	}, [date, doctorId]);

	async function handleSubmit(e) {
		e.preventDefault();
		setError("");
		setSuccess("");

		try {
			const res = await axiosInstance.post("/users/appointment", {
				doctorId,
				date,
				description,
				slot: { slotNumber: slotNumber },
			});
			res && setSuccess("Your appointment has been sent successfully!");
			console.log(res);
		} catch (err) {
			if (err.response) {
				setError("You failed to submit the appointment!");
				console.log(err.response);
			}
		}
	}

	return (
		<div className="patientAppointment container top text-center">
			<h1>Make an Appointment</h1>
			<form onSubmit={handleSubmit}>
				<label className="form-label">Choose your doctor:</label>
				<div className="d-flex justify-content-center">
					<select name="doctor" className="form-control w-25" required value={doctorId} onChange={(e) => setDoctorId(e.target.value)}>
						{doctors.content ? (
							doctors.content.map((doctor) => (
								<option value={doctor.id} key={doctor.id}>
								{doctorId && {doctor.firstName} {doctor.lastName}}
								</option>
							))
						) : (
							<option>Loading the data...</option>
						)}
					</select>
				</div>
				<label className="form-label mt-4">Input your date and time appointment:</label>
				<div className="d-flex justify-content-center">
					<input
						type="date"
						placeholder="Appointment Date"
						className="mt-0 form-control w-25"
						required
						value={date}
						onChange={(e) => setDate(e.target.value)}
					/>
					<select name="time" className="form-control w-25" required value={slotNumber} onChange={(e) => setSlotNumber(e.target.value)}>
						{slots && slots.map((slot) => <option value={slot.slotNumber}>{slot.timeSlot}</option>)}
					</select>
				</div>
				<div className="d-flex justify-content-center">
					<textarea
						className="form-control w-75"
						name="description"
						cols="30"
						rows="10"
						placeholder="Description"
						required
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
				</div>
				<br />
				<button className="mt-3 ms-5">Apply Appointment</button>
				<div className="error">{error}</div>
				<div className="success">{success}</div>
			</form>
		</div>
	);
}
