import React from "react";

export default function Feedback({ reviews }) {
	return (
		<>
			{reviews &&
				reviews.map((r, i) => (
					<div className="feedback card mb-3" key={i}>
						<div className="card-body">
							<div className="card-text">{r.review}</div>
						</div>
					</div>
				))}
		</>
	);
}
