import React, {useEffect, useState} from "react";
import Sidebar from "../../components/Sidebar";
import {axiosInstance} from "../../config";

export default function AdminSchedules({token, doctors}) {
	const [doctorId, setDoctorId] = useState("");
	const [schedules, setSchedules] = useState([]);

	useEffect(() => {
		const fetchSchedules = async () => {
			axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
			const res = await axiosInstance.get(`/users/schedule/${doctorId}`);
			setSchedules(res.data);
		};
		fetchSchedules();
	}, [doctorId]);

	console.log(schedules);

	return (
		<div className="AdminDoctors top container-fluid">
			<div className="row">
				<div className="col-2 ps-0">
					<Sidebar />
				</div>
				<div className="col text-center">
					<h1>Doctor Schedule</h1>
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
					<div>
						{schedules &&
							schedules.map((schedule, i) => (
								<div key={i} className="mb-3">
									<b>{schedule.weekDay}</b>: {schedule.paradite && !schedule.pushim && "Morning "} {schedule.pasdite && schedule.pushim && "Evening "} {schedule.pushim && "Not available "}
								</div>
							))}
					</div>
				</div>
			</div>
		</div>
	);
}
