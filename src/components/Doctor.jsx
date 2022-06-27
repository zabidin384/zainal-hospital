import React from "react";
import { Link } from "react-router-dom";

export default function Doctor({ doctors }) {
	return (
		<>
			{doctors.content ? (
				doctors.content.map((doctor) => (
					<div className="doctor mt-5" key={doctor.id}>
						<div className="d-flex gap-3">
							<div>
								<img src="assets/patient/image22.png" alt="" />
							</div>
							<div>
								<div className="doctorName">First Name : {doctor.firstName}</div>
								<div className="doctorName">Last Name : {doctor.lastName}</div>
								<div className="doctorEmail">Email : {doctor.email}</div>
								<Link to={`/patient-doctors-details%${doctor.id}`}>
									<button className="btn btn-secondary btn-sm mt-2">Read more and rate</button>
								</Link>
							</div>
						</div>
					</div>
				))
			) : (
				<h5>Loading the data...</h5>
			)}
		</>
	);
}
