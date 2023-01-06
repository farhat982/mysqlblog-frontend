import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Menu = ({ cat }) => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`https://mysqlblog-backend.onrender.com/api/posts/?cat=${cat}`
				);
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
					<Link
						className='link'
						to={`/post/${post.id}`}
					>
						<button>Read more</button>
					</Link>
				</div>
			))}
		</div>
	);
};

export default Menu;
