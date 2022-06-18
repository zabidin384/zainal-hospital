import React from "react";

export default function About() {
	return (
		<div className="about top container">
			<h1>About Us</h1>
			<div className="row aboutTop d-flex align-items-center mb-5">
				<div className="col">
					<h1>Lorem Ipsum!</h1>
					<p>
						Lorem Media is a full-service social media agency. We offer businesses innovative solutions that deliver the right type of audience to you
						in the most effective strategies possible. We strive to develop a community around your business, polishing your branding, and improving
						your public relations.
					</p>
				</div>
				<div className="col">
					<img src="assets/general/discussion.png" alt="" className="img-fluid" />
				</div>
			</div>

			<div className="row">
				<div className="col d-flex align-items-center">
					<img src="assets/general/image6.png" alt="" className="img-fluid" />
				</div>
				<div className="col">
					<h2>Biography</h2>
					<p>
						Lorem Media is a full-service social media agency. We offer businesses innovative solutions that deliver the right type of audience to you
						in the most effective strategies possible. We strive to develop a community around your business, polishing your branding, and improving
						your public relations. Social Media is now one of the most powerful marketing tools with the ability to communicate with a target audience
						in real time.
					</p>
					<p> It's 2019: time to sink or swim. </p> <p> We are your Social Media Marketing Agency.</p>
					<p>
						Lorem Media is a full-service social media agency. We offer businesses innovative solutions that deliver the right type of audience to you
						in the most effective strategies possible. We strive to develop a community around your business, polishing your branding, and improving
						your public relations. Social Media is now one of the most powerful marketing tools with the ability to communicate with a target audience
						in real time.
					</p>
					<p> It's 2019: time to sink or swim. </p> <p> We are your Social Media Marketing Agency.</p>
				</div>
			</div>

			<div className="text-center">
				<h1>Location</h1>
				<input type="text" placeholder="Enter your location" />
				<button>Search</button>
			</div>

			<img src="assets/general/map.png" alt="" className="img-fluid" />
		</div>
	);
}
