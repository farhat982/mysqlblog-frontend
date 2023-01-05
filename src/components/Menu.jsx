import { useState, useEffect } from 'react';
import axios from 'axios';
const Menu = ({ cat }) => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(`/posts/?cat=${cat}`);
				setPosts(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, [cat]);
	return (
		<div className='menu'>
			<h1>Other posts you may like</h1>
			{posts.map((post) => (
				<div
					key={post.id}
					className='post'
				>
					<img
						src={post.img}
						alt='article-img'
					/>
					<h2>{post.title}</h2>
					<button>Read more</button>
				</div>
			))}
		</div>
	);
};

export default Menu;
