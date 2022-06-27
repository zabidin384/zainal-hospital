import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { axiosInstance } from "../../config";

export default function ArticleDetails({ token }) {
	const [post, setPost] = useState([]);
	const location = useLocation();
	const id = location.pathname.split("%")[1];

	// Get Single Post
	useEffect(() => {
		const fetchPost = async () => {
			axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
			const res = await axiosInstance.get(`/posts/${id}`);
			setPost(res.data);
		};
		fetchPost();
	}, []);

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
				// <>
				// 	<h1>Article 1</h1>
				// 	<div className="row">
				// 		<div className="col">
				// 			<h2>Symptoms</h2>
				// 			<p>
				// 				"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
				// 				et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id
				// 				est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est
				// 				eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor
				// 				repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae
				// 				sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias
				// 				consequatur aut perferendis doloribus asperiores repellat."
				// 			</p>
				// 		</div>
				// 		<div className="col">
				// 			<img src="assets/general/image18.png" alt="" />
				// 		</div>
				// 	</div>

				// 	<div>
				// 		<h2>What causes this disease?</h2>
				// 		<p>
				// 			"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
				// 			et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est
				// 			laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi
				// 			optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
				// 			Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae
				// 			non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut
				// 			perferendis doloribus asperiores repellat."
				// 		</p>
				// 		<p>
				// 			"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
				// 			et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est
				// 			laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi
				// 			optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
				// 			Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae
				// 			non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut
				// 			perferendis doloribus asperiores repellat."
				// 		</p>
				// 	</div>
				// </>
			)}
		</div>
	);
}
