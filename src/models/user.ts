export default interface UserInfoModel {
  userId?: string,
  firstName?: string;
  lastName?: string;
  phone?: string;
  username: string;
  email: string;
  Avatarimage: string;
  password?: string;
  DateAdd: Date;
}

export interface avatar {
  image: string;
  name: string;
  id?: string;
}
