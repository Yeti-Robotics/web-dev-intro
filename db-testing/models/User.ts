import { model, models, Schema } from 'mongoose';

const userSchema = new Schema(
	{
		username: { type: String, required: true },
		age: { type: Number, required: true },
	},
	{ timestamps: true }
);

export interface User {
	username: string;
	age: number;
}

export default models.user || model('user', userSchema);
