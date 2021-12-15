import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../middleware/connect-db';
import Form from '../../models/Form';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const forms = await Form.find();
	console.log(forms);
	return res.status(200).json(forms);
};

export default connectDB(handler);
