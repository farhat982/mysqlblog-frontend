import Logo from '../img/logo.png';

const Footer = () => {
	return (
		<footer>
			<div className='logo'>
				<Link to='/'>
					<FaBloggerB
						style={{ color: 'rgb(10, 138, 217)', fontSize: '40px' }}
					/>
				</Link>
			</div>
			<span>
				Made with Love and <strong>React.js</strong>
			</span>
		</footer>
	);
};

export default Footer;
