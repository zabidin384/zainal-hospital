import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {axiosInstance} from "../../config";
import {post} from "../../data";

export default function ArticleDetails({token}) {
	// const [post, setPost] = useState([]);
	const location = useLocation();
	const id = location.pathname.split("=")[1];

	// // Get Single Post
	// useEffect(() => {
	// 	const fetchPost = async () => {
	// 		axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
	// 		const res = await axiosInstance.get(`/posts/${id}`);
	// 		setPost(res.data);
	// 	};
	// 	fetchPost();
	// }, []);

	return (
		<div className="container top">
			{post ? (
				<>
					<h1>{post && post.title}</h1>
					<p>{post && post.description}</p>
					<div>
						<b>Writer</b>: {post.owner && post.owner.email}
					</div>
					<div>
						<b>Category</b>: {post && post.category}
					</div>
				</>
			) : (
				<h5 className="text-center">Loading the post...</h5>
			)}
		</div>
	);
}
