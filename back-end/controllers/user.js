import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import UserModal from '../models/user.js';

const secret = 'test';

export const signup = async (req, res) => {
	const { firstName, lastName, email, password } = req.body;

	try {
		const oldUser = await UserModal.findOne({ email });

		if (oldUser) {
			return res.status(400).json({ messege: 'User already exsists' });
		}

		const hashedPassword = await bcrypt.hash(password, 12);

		const result = await UserModal.create({
			email,
			password: hashedPassword,
			name: `${firstName} ${lastName}`,
		});

		const token = jwt.sign({ email: result.email, id: result._id }, secret, {
			expiresIn: '1h',
		});

		res.status(201).json({ result, token });
	} catch (error) {
		res.status(500).json({ messege: 'Somthing went wrong' });
		console.log(error);
	}
};
