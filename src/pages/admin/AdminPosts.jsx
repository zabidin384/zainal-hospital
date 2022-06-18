import React from "react";
import Sidebar from "../../components/Sidebar";

export default function AdminPosts() {
	return (
		<div className="AdminPosts top container">
			<div className="row">
				<div className="col-2">
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
							<tr>
								<td>
									<div className="form-check">
										<input type="checkbox" className="form-check-input" />
									</div>
								</td>
								<td>Lorem 1</td>
								<td>Doctor 1</td>
								<td>Ipsum 1</td>
								<td>Hmm</td>
								<td>
									<i className="bi bi-check-lg icon-green"></i> <i className="bi bi-trash-fill icon-red"></i>
								</td>
							</tr>
							<tr>
								<td>
									<div className="form-check">
										<input type="checkbox" className="form-check-input" />
									</div>
								</td>
								<td>Lorem 2</td>
								<td>Doctor 2</td>
								<td>Ipsum 2</td>
								<td>Hmm</td>
								<td>
									<i className="bi bi-check-lg icon-green"></i> <i className="bi bi-trash-fill icon-red"></i>
								</td>
							</tr>
							<tr>
								<td>
									<div className="form-check">
										<input type="checkbox" className="form-check-input" />
									</div>
								</td>
								<td>Lorem 3</td>
								<td>Doctor 3</td>
								<td>Ipsum 3</td>
								<td>Hmm</td>
								<td>
									<i className="bi bi-check-lg icon-green"></i> <i className="bi bi-trash-fill icon-red"></i>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
