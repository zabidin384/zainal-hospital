import React from "react";
import Feedback from "../../components/Feedback";

export default function PatientDoctorDetails() {
	return (
		<div className="PatientDoctorDetails container top">
			<div className="row doctorDetailsHeader d-flex align-items-center">
				<div className="col">
					<img src="assets/patient/doctor-details.png" alt="" />
				</div>
				<div className="col text-center">
					<h2>Hello, I'm</h2>
					<h1>Dr. Marilyn</h1>
					<h3>MBBS, PhD, FCPS, FRCP</h3>
				</div>
			</div>

			<div className="doctorDetailsDesc">
				<h1>Doctor Details</h1>
				<p>
					"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et
					quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est
					laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
					cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
					autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non
					recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis
					doloribus asperiores repellat."
				</p>
			</div>

			<div className="doctorDetailsFeedback">
				<div className="row">
					<div className="col mt-5">
						<input type="text" placeholder="Give a feedback" className="form-control ms-0" />
						<div className="text-center">
							<button>Send feedback</button>
						</div>
					</div>
					<div className="col">
						<h2>Latest Feedbacks</h2>
						<Feedback />
						<Feedback />
						<Feedback />
						<div className="text-center">
							<button>More feedbacks...</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
