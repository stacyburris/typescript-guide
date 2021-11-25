// Company --> new / reference name/slogan/lat/lng
import faker from 'faker';
import { Mappable } from './CustomMap';
export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red';

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      // parseFloat is a built-in function in JavaScript
      // that converts a string to a floating point number
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }
  markerContent(): string {
    return `
    <div>
    <h1>Company name: ${this.companyName}</h1>
    <h3>Catch phrase: ${this.catchPhrase}</h3>
    </div>
    `;
  }
}