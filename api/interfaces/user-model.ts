export interface UserModel {
  passwordsMatch(password: string): boolean;
}