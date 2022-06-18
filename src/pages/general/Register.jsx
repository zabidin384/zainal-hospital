import React from "react";

export default function Register() {
	return (
		<div className="register container top">
			<h1>Register</h1>
			<h3>Please register to continue</h3>
			<div className="row mt-5">
				<div className="col mt-2">
					<br />
					<input type="text" placeholder="First Name" className="form-control" />
					<input type="email" placeholder="Email" className="form-control" />
					<select name="gender" className="form-control">
						<option value="male">Male</option>
						<option value="female">Female</option>
					</select>
					<input type="password" placeholder="Password" className="form-control" />
				</div>
				<div className="col">
					<div class="btn-group" role="group" aria-label="Basic example" className="text-end">
						<button>Patient</button>
						<button>Doctor</button>
					</div>
					<input type="text" placeholder="Last Name" className="form-control" />
					<input type="text" placeholder="Mobile Number" className="form-control" />
					<input type="date" placeholder="Date of Birth" className="form-control" />
					<input type="password" placeholder="Confirm Password" className="form-control" />
				</div>
			</div>
			<div className="text-center">
				<button>Register</button>
			</div>
		</div>
	);
}
