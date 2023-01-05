import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Home = () => {
	const [posts, setPosts] = useState([]);
	const cat = useLocation().search;

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(`/posts${cat}`);
				setPosts(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, [cat]);

	const getText = (html) => {
		const doc = new DOMParser().parseFromString(html, 'text/html');

		return doc.body.textContent;
	};
	return (
		<div className='home'>
			<div className='posts'>
				{posts.map((post) => (
					<div
						className='post'
						key={post.id}
					>
						<div className='img'>
							<img
								src={post.img}
								alt='blogimg'
							/>
						</div>
						<div className='content'>
							<Link
								className='link'
								to={`/post/${post.id}`}
							>
								<h1>{post.title}</h1>
							</Link>
							<p style={{ textAlign: 'justify' }}>{getText(post.desc)}</p>
							<button>Read more</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Home;
