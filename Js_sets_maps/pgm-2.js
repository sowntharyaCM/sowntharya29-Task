const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ['Finland', 'Sweden', 'Norway'];

// Convert arrays to sets
const setA = new Set(a);
const setB = new Set(b);

// Find union of setA and setB
const union = new Set([...setA, ...setB]);

// Find intersection of setA and setB
const intersection = new Set([...setA].filter(x => setB.has(x)));

// Find elements in setA that are not in setB (difference)
const difference = new Set([...setA].filter(x => !setB.has(x)));

// Convert sets back to arrays if needed
const unionArray = Array.from(union);
const intersectionArray = Array.from(intersection);
const differenceArray = Array.from(difference);

console.log("Union of a and b:", unionArray);
console.log("Intersection of a and b:", intersectionArray);
console.log("Difference (a with b):", differenceArray);
