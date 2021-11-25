// User --> new / reference name/age/lat/lng
import faker from 'faker';
import { Mappable } from './CustomMap';

export class User implements Mappable {
  name: string
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'blue';

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      // parseFloat is a built-in function in JavaScript
      // that converts a string to a floating point number
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }
  markerContent(): string {
    return `User name: ${this.name}`;
  }
}


