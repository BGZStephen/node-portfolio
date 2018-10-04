import { Schema, Model, model, HookNextFunction } from 'mongoose';
import { UserModel } from '../interfaces';
import * as bcrypt from 'bcryptjs';

const UserSchema = new Schema({
	createdOn: Date,
	email: {
		type: String,
		unique: true,
	},
	name: String,
	password: { type: String, required: true },
	active: { type: Boolean, default: false },
});

UserSchema.pre<UserModel>('save', function(next: HookNextFunction): void {
	if (this.isModified('password')) {
		this.password = bcrypt.hashSync(this.password, 8);
  }
  
  next();
});

UserSchema.methods = {
	passwordsMatch(password: string) {
		return bcrypt.compareSync(password, this.password);
	},
};

export const User: Model<UserModel> = model<UserModel>('User', UserSchema);
