export interface IPreparedTodos {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  user: IUserInfo | null;
}

export interface IUserInfo {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IUserAddressInfo;
  phone: string;
  website: string;
  company: IUserCompanyInfo;
}

interface IUserCompanyInfo {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface IUserAddressInfo {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeolocationUserInfo;
}

interface IGeolocationUserInfo {
  lat: string;
  lng: string;
}
