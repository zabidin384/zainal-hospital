import React from "react";
import { Link } from "react-router-dom";

export default function Article({ posts }) {
	return (
		<>
			{posts.content ? (
				posts.content.map((post) => (
					<div className="article">
						<div className="row">
							<div className="col d-flex gap-5 flex-wrap">
								<div className="card" key={post.id}>
									<img src="assets/general/disease.png" alt="" className="card-img-top mx-auto" />
									<div className="card-body">
										<h5 className="card-title text-center fw-bold">{post.title}</h5>
										<p className="card-text">{post.description}</p>
									</div>
									<div className="text-center mb-3">
										<Link to={`/article-details%${post.id}`}>
											<button>Read more</button>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				))
			) : (
				<div className="col">
					<h5 className="text-center">Loading the data...</h5>
				</div>
			)}
		</>
	);
}
