import React from "react";

export default function Login() {
	return (
		<div className="login container top">
			<h1>Login</h1>
			<div className="row">
				<div className="col d-flex flex-column align-items-center justify-content-center">
					<h3>Please log in to continue</h3>
					<input type="email" placeholder="Email" className="form-control" />
					<input type="password" placeholder="Password" className="form-control" />
					<button>Login</button>
				</div>
				<div className="col">
					<img src="assets/general/login.png" alt="" className="img-fluid" />
				</div>
				{/* <div className="col text-center">
					<div class="btn-group" role="group" aria-label="Basic example">
						<button type="button" className="btn btn-primary active">
							Patient
						</button>
						<button type="button" className="btn btn-primary">
							Doctor
						</button>
						<button type="button" className="btn btn-primary">
							Admin
						</button>
					</div>
				</div> */}
			</div>
		</div>
	);
}
