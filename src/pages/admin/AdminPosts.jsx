import React from "react";
import Sidebar from "../../components/Sidebar";

export default function AdminPosts({ posts }) {
	return (
		<div className="AdminPosts top container-fluid">
			<div className="row">
				<div className="col-2 ps-0">
					<Sidebar />
				</div>
				<div className="col">
					<h1>All List of Posts</h1>
					<input type="text" placeholder="Search the title of the post..." className="form-control" />
					<table className="table mt-5 table-hover">
						<thead>
							<tr className="table-secondary">
								<th scope="col"></th>
								<th scope="col">Title</th>
								<th scope="col">Author</th>
								<th scope="col">Category</th>
								<th scope="col">Description</th>
								<th scope="col">Action</th>
							</tr>
						</thead>
						<tbody>
							{posts.content ? (
								posts.content.map((post) => (
									<tr key={post.id}>
										<td>
											<div className="form-check">
												<input type="checkbox" className="form-check-input" />
											</div>
										</td>
										<td>{post.title}</td>
										<td>{post.owner.email}</td>
										<td>{post.category}</td>
										<td>{post.description}</td>
										<td>
											<i className="bi bi-check-lg icon-green"></i> <i className="bi bi-trash-fill icon-red"></i>
										</td>
									</tr>
								))
							) : (
								<tr>
									<td colSpan="5" className="fw-bold text-center">
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
