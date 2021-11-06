export interface ItemType {
  name: string;
  email: string;
}


export interface TodoUserType {
  user: UserType | null;
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface UserType {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserAddressType;
  phone: string;
  website: string;
  company: UserCompanyType;
}

interface UserAddressType {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: AddressGeoType;
}

interface AddressGeoType {
  lat: string;
  lng: string;
}

interface UserCompanyType {
  name: string;
  catchPhrase: string;
  bs: string;
}
