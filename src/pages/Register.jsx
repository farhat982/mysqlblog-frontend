import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
	const [inputs, setInputs] = useState({
		username: '',
		email: '',
		password: '',
	});
	const [error, setError] = useState(null);
	const navigate = useNavigate();

	const handleChange = (e) => {
		setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				'https://mysqlblog-backend.onrender.com/api/auth/register',
				inputs
			);
			navigate('/login');
		} catch (error) {
			setError(error.response.data);
		}
	};

	return (
		<div className='auth'>
			<form>
				<div className='logo--login'>
					<FaBloggerB />
				</div>
				<h1 style={{ textAlign: 'center' }}>Register</h1>
				<input
					name='username'
					type='text'
					placeholder='Username'
					required
					onChange={handleChange}
				/>
				<input
					name='email'
					type='email'
					placeholder='Email'
					required
					onChange={handleChange}
				/>
				<input
					name='password'
					type='password'
					placeholder='Password'
					required
					onChange={handleChange}
				/>
				<button onClick={handleSubmit}>Register</button>
				{error && <p>User already exists</p>}
				<span>
					Already have an account?
					<Link
						className=''
						to='/login'
					>
						Login
					</Link>
				</span>
			</form>
		</div>
	);
};

export default Register;
