import { Document } from 'mongoose';
import { UserModel } from '.';

export interface UserDocument extends UserModel, Document {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  active?: boolean;
  createdOn?: Date;
}