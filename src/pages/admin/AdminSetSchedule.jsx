import React, {useState} from "react";
import Sidebar from "../../components/Sidebar";
import {axiosInstance} from "../../config";

export default function AdminSetSchedule({token, doctors}) {
	const [doctorId, setDoctorId] = useState("");
	const [monday, setMonday] = useState({weekDay: "monday", paradite: true, pasdite: false, pushim: false});
	const [tuesday, setTuesday] = useState({weekDay: "tuesday", paradite: true, pasdite: false, pushim: false});
	const [wednesday, setWednesday] = useState({weekDay: "wednesday", paradite: true, pasdite: false, pushim: false});
	const [thursday, setThursday] = useState({weekDay: "thursday", paradite: true, pasdite: false, pushim: false});
	const [friday, setFriday] = useState({weekDay: "friday", paradite: true, pasdite: false, pushim: false});
	const [saturday, setSaturday] = useState({weekDay: "saturday", paradite: false, pasdite: false, pushim: true});
	const [sunday, setSunday] = useState({weekDay: "sunday", paradite: false, pasdite: false, pushim: true});
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");

	async function handleSubmit(e) {
		e.preventDefault();
		setError("");
		setSuccess("");

		try {
			const res = await axiosInstance.post(`/users/schedule/?id=${doctorId}`, [monday, tuesday, wednesday, thursday, friday, saturday, sunday]);
			res && setSuccess("The schedule has been update successfully!");
			console.log(res);
		} catch (err) {
			if (err.response) {
				setError("You failed to update the schedule!");
				console.log(err.response);
			}
		}
	}

	return (
		<div className="adminSchedules top container-fluid">
			<div className="row">
				<div className="col-2 ps-0">
					<Sidebar />
				</div>
				<div className="col text-center">
					<h1>Set Doctor Schedules</h1>
					<label>
						<b>Select the doctor</b> :
					</label>
					<div className="d-flex justify-content-center mt-2">
						<select className="form-control w-25" required value={doctorId} onChange={e => setDoctorId(e.target.value)}>
							<option defaultValue>Select doctor</option>
							{doctors.content ? (
								doctors.content.map(doctor => (
									<option value={doctor.id} key={doctor.id}>
										{doctor.firstName} {doctor.lastName}
									</option>
								))
							) : (
								<option>Loading the data...</option>
							)}
						</select>
					</div>
					<label>
						<h3>Schedules</h3>
					</label>
					<form onSubmit={handleSubmit}>
						<div className="d-flex justify-content-center flex-wrap gap-5">
							<div>
								<label className="mb-3">
									<b>Monday</b>
								</label>
								<div className="d-flex flex-row gap-2">
									<label>Morning: </label>
									<select value={monday.paradite} onChange={e => setMonday({...monday, paradite: e.target.value})}>
										<option value={true} defaultValue>
											Available
										</option>
										<option value={false}>Not Available</option>
									</select>
								</div>
								<div className="d-flex flex-row gap-2">
									<label>Evening: </label>
									<select value={monday.pasdite} onChange={e => setMonday({...monday, pasdite: e.target.value})}>
										<option value={false} defaultValue>
											Not Available
										</option>
										<option value={true}>Available</option>
									</select>
								</div>
								<div className="d-flex flex-row gap-2">
									<label>Off Work: </label>
									<select value={monday.pushim} onChange={e => setMonday({...monday, pushim: e.target.value})}>
										<option value={false} defaultValue>
											No
										</option>
										<option value={true}>Yes</option>
									</select>
								</div>
							</div>

							<div>
								<label className="mb-3">
									<b>Tuesday</b>
								</label>
								<div className="d-flex flex-row gap-2">
									<label>Morning: </label>
									<select value={tuesday.paradite} onChange={e => setTuesday({...tuesday, paradite: e.target.value})}>
										<option value={true} defaultValue>
											Available
										</option>
										<option value={false}>Not Available</option>
									</select>
								</div>
								<div className="d-flex flex-row gap-2">
									<label>Evening: </label>
									<select value={tuesday.pasdite} onChange={e => setTuesday({...tuesday, pasdite: e.target.value})}>
										<option value={false} defaultValue>
											Not Available
										</option>
										<option value={true}>Available</option>
									</select>
								</div>
								<div className="d-flex flex-row gap-2">
									<label>Off Work: </label>
									<select value={tuesday.pushim} onChange={e => setTuesday({...tuesday, pushim: e.target.value})}>
										<option value={false} defaultValue>
											No
										</option>
										<option value={true}>Yes</option>
									</select>
								</div>
							</div>

							<div>
								<label className="mb-3">
									<b>Wednesday</b>
								</label>
								<div className="d-flex flex-row gap-2">
									<label>Morning: </label>
									<select value={wednesday.paradite} onChange={e => setWednesday({...wednesday, paradite: e.target.value})}>
										<option value={true} defaultValue>
											Available
										</option>
										<option value={false}>Not Available</option>
									</select>
								</div>
								<div className="d-flex flex-row gap-2">
									<label>Evening: </label>
									<select value={wednesday.pasdite} onChange={e => setWednesday({...wednesday, pasdite: e.target.value})}>
										<option value={false} defaultValue>
											Not Available
										</option>
										<option value={true}>Available</option>
									</select>
								</div>
								<div className="d-flex flex-row gap-2">
									<label>Off Work: </label>
									<select value={wednesday.pushim} onChange={e => setWednesday({...wednesday, pushim: e.target.value})}>
										<option value={false} defaultValue>
											No
										</option>
										<option value={true}>Yes</option>
									</select>
								</div>
							</div>

							<div>
								<label className="mb-3">
									<b>Thursday</b>
								</label>
								<div className="d-flex flex-row gap-2">
									<label>Morning: </label>
									<select value={thursday.paradite} onChange={e => setThursday({...thursday, paradite: e.target.value})}>
										<option value={true} defaultValue>
											Available
										</option>
										<option value={false}>Not Available</option>
									</select>
								</div>
								<div className="d-flex flex-row gap-2">
									<label>Evening: </label>
									<select value={thursday.pasdite} onChange={e => setThursday({...thursday, pasdite: e.target.value})}>
										<option value={false} defaultValue>
											Not Available
										</option>
										<option value={true}>Available</option>
									</select>
								</div>
								<div className="d-flex flex-row gap-2">
									<label>Off Work: </label>
									<select value={thursday.pushim} onChange={e => setThursday({...thursday, pushim: e.target.value})}>
										<option value={false} defaultValue>
											No
										</option>
										<option value={true}>Yes</option>
									</select>
								</div>
							</div>

							<div>
								<label className="mb-3">
									<b>Friday</b>
								</label>
								<div className="d-flex flex-row gap-2">
									<label>Morning: </label>
									<select value={friday.paradite} onChange={e => setFriday({...friday, paradite: e.target.value})}>
										<option value={true} defaultValue>
											Available
										</option>
										<option value={false}>Not Available</option>
									</select>
								</div>
								<div className="d-flex flex-row gap-2">
									<label>Evening: </label>
									<select value={friday.pasdite} onChange={e => setFriday({...friday, pasdite: e.target.value})}>
										<option value={false} defaultValue>
											Not Available
										</option>
										<option value={true}>Available</option>
									</select>
								</div>
								<div className="d-flex flex-row gap-2">
									<label>Off Work: </label>
									<select value={friday.pushim} onChange={e => setFriday({...friday, pushim: e.target.value})}>
										<option value={false} defaultValue>
											No
										</option>
										<option value={true}>Yes</option>
									</select>
								</div>
							</div>

							<div>
								<label className="mb-3">
									<b>Saturday</b>
								</label>
								<div className="d-flex flex-row gap-2">
									<label>Morning: </label>
									<select value={saturday.paradite} onChange={e => setSaturday({...saturday, paradite: e.target.value})}>
										<option value={false} defaultValue>
											Not Available
										</option>
										<option value={true}>Available</option>
									</select>
								</div>
								<div className="d-flex flex-row gap-2">
									<label>Evening: </label>
									<select value={saturday.pasdite} onChange={e => setSaturday({...saturday, pasdite: e.target.value})}>
										<option value={false} defaultValue>
											Not Available
										</option>
										<option value={true}>Available</option>
									</select>
								</div>
								<div className="d-flex flex-row gap-2">
									<label>Off Work: </label>
									<select value={saturday.pushim} onChange={e => setSaturday({...saturday, pushim: e.target.value})}>
										<option value={true} defaultValue>
											Yes
										</option>
										<option value={false}>No</option>
									</select>
								</div>
							</div>

							<div>
								<label className="mb-3">
									<b>Sunday</b>
								</label>
								<div className="d-flex flex-row gap-2">
									<label>Morning: </label>
									<select value={sunday.paradite} onChange={e => setSunday({...sunday, paradite: e.target.value})}>
										<option value={false} defaultValue>
											Not Available
										</option>
										<option value={true}>Available</option>
									</select>
								</div>
								<div className="d-flex flex-row gap-2">
									<label>Evening: </label>
									<select value={sunday.pasdite} onChange={e => setSunday({...sunday, pasdite: e.target.value})}>
										<option value={false} defaultValue>
											Not Available
										</option>
										<option value={true}>Available</option>
									</select>
								</div>
								<div className="d-flex flex-row gap-2">
									<label>Off Work: </label>
									<select value={sunday.pushim} onChange={e => setSunday({...sunday, pushim: e.target.value})}>
										<option value={true} defaultValue>
											Yes
										</option>
										<option value={false}>No</option>
									</select>
								</div>
							</div>
						</div>
						<div className="error">{error}</div>
						<div className="success">{success}</div>
						<button type="submit" className="my-4">
							Update Schedule
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
