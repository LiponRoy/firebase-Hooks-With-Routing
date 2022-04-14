import React, { useState } from 'react';
import './Signup.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, provider } from '../FirebaseConfig/Firebase-config';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
	const [email, setEmail] = useState('');
	const [password, setpassword] = useState('');
	const [confirmPassword, setconfirmPassword] = useState('');
	// const [error, setError] = useState('');
	const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
	const navagate = useNavigate();
	const handleEmailBlur = event => {
		setEmail(event.target.value);
	};
	const handlePasswordBlur = event => {
		setpassword(event.target.value);
	};
	const confirmPasswordBlur = event => {
		confirmPassword(event.target.value);
	};

	const handleCreateUser = event => {
		event.preventDefault();

		// if (password !== confirmPassword) {
		// 	setError('two password did not match');
		// 	return;
		// }

		createUserWithEmailAndPassword(email, password);
	};

	if (user) {
		navagate('/');
	}

	//.............

	return (
		<div className='container'>
			<div>
				<div className='text-center'>
					<h1>Signup page</h1>
				</div>
				<div className='row'>
					<div className='col-md-3'></div>
					<div className='col-md-6'>
						<form onSubmit={handleCreateUser}>
							<div className='form-group'>
								<label htmlFor='exampleInputEmail1'>Email address</label>
								<input type='email' onBlur={handleEmailBlur} className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' placeholder='Enter email' />
							</div>
							<div className='form-group'>
								<label htmlFor='exampleInputPassword1'>Password</label>
								<input type='password' onBlur={handlePasswordBlur} className='form-control' id='exampleInputPassword1' placeholder='Password' />
							</div>

							<div className='form-group'>
								<label htmlFor='exampleInputConfirmPassword'>Password</label>
								<input type='confirmPassword' onBlur={confirmPasswordBlur} className='form-control' id='exampleInputPassword1' placeholder='Password' />
							</div>
							<p style={{ color: 'red' }}>{error?.message}</p>
							<button type='submit' className='btn btn-primary'>
								Submit
							</button>
						</form>
					</div>
					<div className='col-md-3'></div>
				</div>
			</div>
		</div>
	);
};

export default Signup;
