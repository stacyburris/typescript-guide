// BUBBLE SORT
class Sorter {
  constructor(public collection: number[]) { }
  sort(): void {
    const { length } = this.collection;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection[j] > this.collection[j + 1]) { // compare the left side to the right side
          const leftHand = this.collection[j]; // store the left side
          this.collection[j] = this.collection[j + 1]; // tke right side and put it on the left side
          this.collection[j + 1] = leftHand; // take the left side and put it on the right side
        }
      }
    }
  }
}
const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);