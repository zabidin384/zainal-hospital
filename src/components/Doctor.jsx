import React from "react";

export default function Doctor() {
	return (
		<div className="doctor mt-5">
			<div className="row">
				<div className="col">
					<img src="assets/patient/image22.png" alt="" />
				</div>
				<div className="col">
					<div className="doctorName">Silva A.D.M.P</div>
					<div className="doctorTitle">MBBS,MD,IDCCM</div>
					<button className="btn btn-secondary btn-sm">Read more and rate</button>
				</div>
			</div>
		</div>
	);
}
