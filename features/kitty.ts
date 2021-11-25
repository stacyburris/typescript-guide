// Interface Example

interface Kitty {
  summary(): string;
};

const describeKitty = {
  name: 'mr. whiskers',
  age: 15,
  color: 'grey',
  toes: 18,
  isHungry: true,
  isSleeping: true,
  hoursOfSleepPerDay: 16,
  amountOfSleepInLifeTime: 0.7, // 70% of life
  summary(): string {
    return `Meet ${this.name}, he is ${this.age} years old and is ${this.color}. He has ${this.toes} toes and is always ${this.isHungry ? 'hungry' : 'not hungry'}. He ${this.isSleeping ? 'sleeps' : 'doesn\'t sleep'} for ${this.hoursOfSleepPerDay} hours per day which is roughly ${this.amountOfSleepInLifeTime * 100}% of his life. `;
  }
};
const printKitty = (kitty: Kitty): void => {
  console.log(kitty.summary());
};

printKitty(describeKitty);
