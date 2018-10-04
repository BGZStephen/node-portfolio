export interface UserDocument {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  active?: boolean;
  createdOn?: Date;
}