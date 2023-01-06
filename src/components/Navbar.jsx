import { NavLink } from 'react-router-dom';
import { FaBloggerB } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';

const Navbar = () => {
	const { currentUser, logout } = useContext(AuthContext);
	return (
		<div className='navbar'>
			<div className='container'>
				<div className='logo'>
					<NavLink to='/'>
						<FaBloggerB
							style={{ color: 'rgb(10, 138, 217)', fontSize: '45px' }}
						/>
					</NavLink>
				</div>
				<div className='links'>
					<NavLink
						className='link'
						to='/?cat=art'
					>
						<h6>ART</h6>
					</NavLink>
					<NavLink
						className='link'
						to='/?cat=science'
					>
						<h6>SCIENCE</h6>
					</NavLink>
					<NavLink
						className='link'
						to='/?cat=technology'
					>
						<h6>TECHNOLOGY</h6>
					</NavLink>
					<NavLink
						className='link'
						to='/?cat=cinema'
					>
						<h6>CINEMA</h6>
					</NavLink>
					<NavLink
						className='link'
						to='/?cat=design'
					>
						<h6>DESIGN</h6>
					</NavLink>
					<NavLink
						className='link'
						to='/?cat=food'
					>
						<h6>FOOD</h6>
					</NavLink>
					<span>{currentUser?.username}</span>
					{currentUser ? (
						<span onClick={logout}>Logout</span>
					) : (
						<NavLink
							className='link'
							to='/login'
						>
							Login
						</NavLink>
					)}
					<span className='write'>
						<NavLink
							to='/write'
							className='link'
						>
							Write
						</NavLink>
					</span>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
