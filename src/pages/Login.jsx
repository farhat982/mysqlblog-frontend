import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const Login = () => {
	const [inputs, setInputs] = useState({
		username: '',
		password: '',
	});
	const [error, setError] = useState(null);
	const navigate = useNavigate();
	const { login } = useContext(AuthContext);

	const handleChange = (e) => {
		setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await login(inputs);
			navigate('/');
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
				<h1 style={{ textAlign: 'center' }}>Login</h1>
				<input
					type='text'
					placeholder='Username'
					required
					name='username'
					onChange={handleChange}
				/>
				<input
					type='password'
					placeholder='Password'
					required
					name='password'
					onChange={handleChange}
				/>
				<button onClick={handleSubmit}>Login</button>
				{error && <p>Invalid username or password</p>}
				<span>
					Do not have an account?
					<Link
						className=''
						to='/register'
					>
						Register
					</Link>
				</span>
			</form>
		</div>
	);
};

export default Login;
