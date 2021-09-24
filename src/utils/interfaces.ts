interface IGeo {
  lat: string;
  lng: string;
}
interface IAddress {
  city: string;
  geo: IGeo;
  street: string;
  suite: string;
  zipcode: string;
}
interface ICompany {
  bs: string;
  catchPhrase: string;
  name: string;
}

export interface IUser {
  address: IAddress;
  company: ICompany;
  email: string;
  id: number;
  phone: string;
  username: string;
  website: string;
}
