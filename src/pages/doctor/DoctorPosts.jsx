import React from "react";

export default function DoctorPosts() {
	return (
		<div className="doctorPosts container top">
			<h1>My Posts</h1>
			<div className="text-end">
				<button>Add a post</button>
				<div>Show 10 appointments</div>
			</div>
			<table className="table mt-5">
				<thead>
					<tr className="table-secondary">
						<th scope="col">id</th>
						<th scope="col">Title</th>
						<th scope="col">Publish Date</th>
						<th scope="col">Category</th>
						<th scope="col">Description</th>
						<th scope="col">Action</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Lorem ipsum</td>
						<td>10/10/2020</td>
						<td>Lorem ipsum</td>
						<td>praesentium voluptatum</td>
						<td>
							<i class="bi bi-pencil-square icon-green"></i> <i className="bi bi-trash-fill icon-red"></i>
						</td>
					</tr>
					<tr>
						<td>1</td>
						<td>Lorem ipsum</td>
						<td>10/10/2020</td>
						<td>Lorem ipsum</td>
						<td>praesentium voluptatum</td>
						<td>
							<i class="bi bi-pencil-square icon-green"></i> <i className="bi bi-trash-fill icon-red"></i>
						</td>
					</tr>
					<tr>
						<td>1</td>
						<td>Lorem ipsum</td>
						<td>10/10/2020</td>
						<td>Lorem ipsum</td>
						<td>praesentium voluptatum</td>
						<td>
							<i class="bi bi-pencil-square icon-green"></i> <i className="bi bi-trash-fill icon-red"></i>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
