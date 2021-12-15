import { NextApiHandler } from 'next';
import connectDB from '../../middleware/connect-db';
import User from '../../models/User';

const handler: NextApiHandler = async (req, res) => {
	const user = JSON.parse(req.body);
	const newUser = new User(user);
	await newUser.save();
	return res.status(200).send('Success');
};

export default connectDB(handler);
