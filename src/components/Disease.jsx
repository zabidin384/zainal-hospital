import React from "react";

export default function Disease() {
	return (
		<div className="diseases">
			<div className="row">
				<div className="col">
					<div className="card">
						<img src="assets/general/disease.png" alt="" className="card-img-top mx-auto" />
						<div className="card-body">
							<h5 className="card-title text-center fw-bold">Disease 1</h5>
							<p className="card-text">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</p>
						</div>
						<div className="text-center mb-3">
							<button>Read more</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
