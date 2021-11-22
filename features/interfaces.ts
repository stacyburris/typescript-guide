const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true
};

const printVehicle = (vehicle: { name: string; year: number; broken: boolean }): void => { // void equals function returns nothing
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken? ${vehicle.broken}`);
};
printVehicle(oldCivic);


// Improve above code with an interface:
interface Reportable {
  // name: string;
  // year: Date;
  // broken: boolean;
  summary(): string;
}

const oldCivic2 = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

// Another Interface example:
const drink2 = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  }
};


const printSummary = (item: Reportable): void => {
  // console.log(`Name: ${item.name}`);
  // console.log(`Year: ${item.year}`);
  // console.log(`Broken? ${item.broken}`);
  console.log(item.summary());
};
printSummary(oldCivic2);
printSummary(drink2);
