import { useState, useEffect } from 'react';
import axios from 'axios';
const Menu = ({ cat }) => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`/posts/?cat=${cat}`
				);
				setPosts(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, [cat]);

	//const posts = [
	//  {
	//    id: 5,
	//    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
	//    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!',
	//    img: 'https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
	//  },
	//  {
	//    id: 6,
	//    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
	//    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!',
	//    img: 'https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
	//  },
	//  {
	//    id: 7,
	//    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
	//    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!',
	//    img: 'https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
	//  },
	//  {
	//    id: 8,
	//    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
	//    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!',
	//    img: 'https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
	//  },
	//]
	return (
		<div className='menu'>
			<h1>Other posts you may like</h1>
			{posts.map((post) => (
				<div
					key={post.id}
					className='post'
				>
					<img
						src={`../uploads/${post.img}`}
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
