import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
	MDBIcon,
	MDBCard,
	MDBCardBody,
	MDBCardFooter,
	MDBInput,
	MDBValidation,
	MDBValidationItem,
	MDBSpinner,
	MDBBtn,
	MDBFooter,
} from 'mdb-react-ui-kit';

const initialState = {
	email: '',
	password: '',
};

const Login = () => {
	const [formValue, setFormValue] = useState(initialState);

	const { email, password } = formValue;

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const onInputChange = (e) => {
		let { name, value } = e.target;
		setFormValue({ ...formValue, [name]: value });
	};

	return (
		<div
			style={{
				margin: 'auto',
				padding: '15px',
				maxWidth: '450px',
				alignContent: 'center',
				marginTop: '120px',
			}}
		>
			<MDBCard alignment="center">
				<MDBIcon fas icon="user-circle" className="fa-2x" />
				<h5>sign In</h5>
				<MDBCardBody>
					<MDBValidation onSubmit={handleSubmit} className="row g-3">
						<MDBValidationItem
							feedback="Please provide your email"
							invalid
							className="col-md-12"
						>
							<MDBInput
								label="Email"
								type="email"
								value={email}
								name="email"
								onChange={onInputChange}
								required
							/>
						</MDBValidationItem>
						<MDBValidationItem
							feedback="Please provide your password"
							invalid
							className="col-md-12"
						>
							<MDBInput
								label="Password"
								type="password"
								value={password}
								name="password"
								onChange={onInputChange}
								required
							/>
						</MDBValidationItem>
						<div className="col-12">
							<MDBBtn style={{ width: '100%' }} className="mt-2">
								Login
							</MDBBtn>
						</div>
					</MDBValidation>
				</MDBCardBody>
				<MDBCardFooter>
					<Link to="/register">
						<p>Don't have an account ? Sign Up</p>
					</Link>
				</MDBCardFooter>
			</MDBCard>
		</div>
	);
};

export default Login;
