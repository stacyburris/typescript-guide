import faker from 'faker';
// npmjs.com "faker" package

export class User {
  name: string
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      // parseFloat is a built-in function in JavaScript
      // that converts a string to a floating point number
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }