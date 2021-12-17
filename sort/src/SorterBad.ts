// BUBBLE SORT
// Union operator and type guards
class SorterBad {
  constructor(public collection: number[] | string) { }
  sort(): void {
    const { length } = this.collection;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        // All if this only works if collection is number[]
        // If collection is an array of numbers
        if (this.collection instanceof Array) { // type guard
          // collection === number[]
          if (this.collection[j] > this.collection[j + 1]) { // compare the left side to the right side
            const leftHand = this.collection[j]; // store the left side
            this.collection[j] = this.collection[j + 1]; // tke right side and put it on the left side
            this.collection[j + 1] = leftHand; // take the left side and put it on the right side
          }
        }
        // Only going to work if collection is a string
        // if collection is a string, do this logic instead:
        // ~~logic to compare and swap characters in a string
        if (typeof this.collection === "string") { // type guard 

        }
      }
    }
  }
}