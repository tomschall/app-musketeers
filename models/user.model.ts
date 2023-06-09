export type UserModel = {
  id: string;
  userName: string;
  firstName: string;
  lastName: string;
  avatarUrl: string;
};

export enum ProfileQuery {
  me = 'me',
}
