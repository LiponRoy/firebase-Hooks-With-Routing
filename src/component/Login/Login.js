import React, { useState } from 'react';
import './Login.css';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, provider } from '../FirebaseConfig/Firebase-config';
import { useNavigate } from 'react-router-dom';
const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setpassword] = useState('');
	// const [error, setError] = useState('');
	const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
	const navagate = useNavigate();

	const handleEmailBlur = event => {
		setEmail(event.target.value);
	};
	const handlePasswordBlur = event => {
		setpassword(event.target.value);
	};

	const handleSignIn = event => {
		event.preventDefault();

		// if (password !== confirmPassword) {
		// 	setError('two password did not match');
		// 	return;
		// }

		signInWithEmailAndPassword(email, password);
	};

	if (user) {
		navagate('/about');
	}
	return (
		<div>
			<div className='container'></div>
			<div className='text-center'>
				<h1>Login page</h1>
			</div>
			<div className='row'>
				<div className='col-md-3'></div>
				<div className='col-md-6'>
					<form onSubmit={handleSignIn}>
						<div className='form-group'>
							<label for='exampleInputEmail1'>Email address</label>
							<input type='email' onBlur={handleEmailBlur} className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' placeholder='Enter email' />
						</div>
						<div className='form-group'>
							<label for='exampleInputPassword1'>Password</label>
							<input type='password' onBlur={handlePasswordBlur} className='form-control' id='exampleInputPassword1' placeholder='Password' />
						</div>
						<p style={{ color: 'red' }}>{error?.message}</p>
						{loading && <p>Loading....</p>}
						<button type='submit' className='btn btn-primary'>
							Submit
						</button>
					</form>
				</div>
				<div className='col-md-3'></div>
			</div>
			<div />
		</div>
	);
};

export default Login;
