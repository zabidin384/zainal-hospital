import React from "react";
import Article from "../../components/Article";

export default function Articles({ posts }) {
	return (
		<div className="articles top container">
			<h1>Read All Articles</h1>
			<div className="d-flex gap-5 mt-5">
				<Article posts={posts} />
			</div>
		</div>
	);
}
