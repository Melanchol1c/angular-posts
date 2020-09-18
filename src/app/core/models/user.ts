import Address from './address';
import Company from './company';

export default class User {
  public id: number;
  public name: string;
  public username: string;
  public email: string;
  public address: Address;
  public phone: string;
  public website: string;
  public company: Company;

  get avatar() {
    return `https://api.adorable.io/avatars/${Math.floor(
      Math.random() * Math.floor(1000)
    )}`;
  }

  public constructor(data: Partial<User>) {
    this.id = data.id;
    this.name = data.name;
    this.username = data.username;
    this.email = data.email;
    this.address = data.address;
    this.phone = data.phone;
    this.website = data.website;
    this.company = data.company;
  }
}
