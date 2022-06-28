import React from "react";

export default function Diagnosis({ diagnose }) {
	return (
		<>
			{diagnose &&
				diagnose.map((d, i) => (
					<div className="diagnosis" key={i}>
						<div className="card p-5 bg-secondary opacity-50 text-light">
							<div className="card-body">
								<div className="card-title fw-bold">Diagnose</div>
								<div className="card-text">{d.diagnose}</div>
							</div>
						</div>
					</div>
				))}
		</>
	);
}
