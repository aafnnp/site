export const HeadPost = ({meta, isBlogPost}) => (
	<>
		<h2 className="text-5xl font-bold mb-4">{meta.title}</h2>
		<div className="post-content">{isBlogPost ? null : <p>{meta.description}</p>}</div>
		<div className="post-footer">
			<span>{meta.date}</span>
			<span role="img" aria-label="one coffee">
				☕ {meta.readTime + " min read"}
			</span>
		</div>
	</>
);
