import { Document } from 'mongoose';
import { UserDocument } from '.'

export interface UserModel extends UserDocument, Document {
  passwordsMatch(password: string): boolean;
}