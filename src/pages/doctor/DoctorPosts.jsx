import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {axiosInstance} from "../../config";
import {posts} from "../../data";

export default function DoctorPosts({profiles, token}) {
	// const [post, setPost] = useState([]);
	const location = useLocation();
	const id = location.pathname.split("%")[1];

	// // Get Post By Doctor
	// useEffect(() => {
	// 	const fetchPost = async () => {
	// 		axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
	// 		const res = await axiosInstance.get(`/posts/doctor/${id}`);
	// 		setPost(res.data);
	// 	};
	// 	fetchPost();
	// }, []);

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
					{posts.content ? (
						posts.content.map(post => (
							<tr key={post.id}>
								<td>{post.id}</td>
								<td>{post.title}</td>
								<td>{post.publishDate}</td>
								<td>{post.category}</td>
								<td className="textWrap">{post.description}</td>
								<td>
									<i className="bi bi-pencil-square icon-green"></i> <i className="bi bi-trash-fill icon-red"></i>
								</td>
							</tr>
						))
					) : (
						<tr>
							<td colSpan={6} className="fw-bold text-center">
								Loading the data...
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
}
