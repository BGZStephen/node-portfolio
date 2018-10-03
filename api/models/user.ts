import { Schema, Model, model, HookNextFunction } from 'mongoose';
import { UserDocument } from 'api/interfaces';
import * as bcrypt from 'bcryptjs';

const UserSchema: Schema = new Schema({
	createdOn: Date,
	email: {
		type: String,
		unique: true,
	},
	name: String,
	password: String,
	active: { type: Boolean, default: false },
});

UserSchema.pre('save', function(this: UserDocument, next: HookNextFunction) {
	if (this.isModified('password')) {
		this.password = bcrypt.hashSync(this.password, 8);
	}
});

UserSchema.methods = {
	passwordsMatch(password: string) {
		return bcrypt.compareSync(password, this.password);
	},
};

export const User: Model<UserDocument> = model<UserDocument>('User', UserSchema);
