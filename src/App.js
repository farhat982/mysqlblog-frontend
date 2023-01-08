import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Single from './pages/Single';
import Write from './pages/Write';
import { AuthContext } from './context/authContext';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import './style.scss';

function App() {
	const { currentUser } = useContext(AuthContext);

	const Layout = () => {
		return (
			<>
				<Navbar />
				<Outlet />
				<Footer />
			</>
		);
	};
	const ProtectedRoute = ({ children }) => {
		if (!currentUser) {
			return <Navigate to='/login' />;
		}
		return children;
	};

	const router = createBrowserRouter([
		{
			path: '/',
			element: [
				<ProtectedRoute>
					<Layout />
				</ProtectedRoute>,
			],
			children: [
				{
					path: '/',
					element: <Home />,
				},
				{
					path: '/post/:id',
					element: <Single />,
				},
				{
					path: '/write',
					element: <Write />,
				},
			],
		},
		{
			path: '/register',
			element: <Register />,
		},
		{
			path: '/login',
			element: <Login />,
		},
	]);

	return (
		<div className='app'>
			<div className='container'>
				<RouterProvider router={router} />
			</div>
		</div>
	);
}

export default App;
