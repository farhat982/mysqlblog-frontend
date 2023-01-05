import Edit from '../img/edit.png';
import Delete from '../img/delete.png';
import Menu from '../components/Menu';
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';

const Single = () => {
	const [post, setPost] = useState({});
	const location = useLocation();
	const navigate = useNavigate();

	const postId = location.pathname.split('/')[2];

	const { currentUser } = useContext(AuthContext);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(`/posts/${postId}`);
				setPost(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, [postId]);

	const handleDelete = async () => {
		try {
			await axios.delete(`/api/posts/${postId}`);
			navigate('/');
		} catch (error) {
			console.log(error);
		}
	};
	const getText = (html) => {
		const doc = new DOMParser().parseFromString(html, 'text/html');

		return doc.body.textContent;
	};
	return (
		<div className='single'>
			<div className='content'>
				<img
					src={post.img}
					alt='article-img'
				/>
				<div className='user'>
					{post.userImg && (
						<img
							src={post.userImg}
							alt='user-img'
						/>
					)}
					<div className='info'>
						<span>{post.username}</span>
						<p>Posted {moment(post.date).fromNow()}</p>
					</div>
					{currentUser.username === post.username && (
						<div className='edit'>
							<Link
								to={`/write?edit=2`}
								state={post}
							>
								<img
									src={Edit}
									alt='edit'
								/>
							</Link>
							<img
								onClick={handleDelete}
								src={Delete}
								alt='delete'
							/>
						</div>
					)}
				</div>
				<h1>{post.title}</h1>
				{/* if you use rich text editor we do no need to have p tags to show description*/}
				{getText(post.desc)}
			</div>
			<div className='menu'>
				<Menu cat={post.cat} />
			</div>
		</div>
	);
};

export default Single;
