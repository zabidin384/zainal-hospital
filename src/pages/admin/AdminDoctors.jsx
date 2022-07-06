import React from "react";
import {Link} from "react-router-dom";
import Sidebar from "../../components/Sidebar";

export default function AdminDoctors({doctors}) {
	return (
		<div className="AdminDoctors top container-fluid">
			<div className="row">
				<div className="col-2 ps-0">
					<Sidebar />
				</div>
				<div className="col">
					<h1>All List of Doctors</h1>
					{/* <input type="text" placeholder="Search name of the doctor..." className="form-control" /> */}
					<table className="table mt-5 table-hover">
						<thead>
							<tr className="table-secondary">
								<th scope="col"></th>
								<th scope="col">First and Last Name</th>
								<th scope="col">Email</th>
								<th scope="col">Date of Birth</th>
								<th scope="col">Experiences</th>
								<th scope="col">Schedules</th>
							</tr>
						</thead>
						<tbody>
							{doctors.content ? (
								doctors.content.map(doctor => (
									<tr key={doctor.id}>
										<td>
											<div className="form-check">
												<input type="checkbox" className="form-check-input" />
											</div>
										</td>
										<td>
											{doctor.firstName} {doctor.lastName}
										</td>
										<td>{doctor.email}</td>
										<td>10/10/1970</td>
										<td>{doctor.experiences.map(experience => experience)}</td>
										<td>
											<Link to="/admin-schedules">
												<button className="btn-sm">See the schedule</button>
											</Link>
										</td>
									</tr>
								))
							) : (
								<tr>
									<td className="fw-bold text-center" colSpan={6}>
										Loading the data...
									</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
