// Animal class definition
class Animal {
    constructor(name, age, color, legs) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }

    // Method to display basic info about the animal
    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Color: ${this.color}, Legs: ${this.legs}`);
    }
}

// Dog class inherits from Animal
class Dog extends Animal {
    constructor(name, age, color) {
        super(name, age, color, 4); // Default to 4 legs for a dog
    }

    // Override method to display specific sound
    makeSound() {
        console.log(`${this.name} barks! Woof Woof!`);
    }
}

// Cat class inherits from Animal
class Cat extends Animal {
    constructor(name, age, color) {
        super(name, age, color, 4); // Default to 4 legs for a cat
    }

    // Override method to display specific sound
    makeSound() {
        console.log(`${this.name} meows! Meow Meow!`);
    }
}

// Creating instances of Dog and Cat
const myDog = new Dog('Buddy', 5, 'Brown');
const myCat = new Cat('Whiskers', 3, 'Gray');

// Testing the methods
myDog.displayInfo();
myDog.makeSound();

myCat.displayInfo();
myCat.makeSound();



class Dog extends Animal {
    constructor(name, age, color) {
        super(name, age, color, 4); // Default to 4 legs for a dog
    }

    // Override method to display more specific info
    displayInfo() {
        console.log(`Dog - Name: ${this.name}, Age: ${this.age}, Color: ${this.color}, Legs: ${this.legs}`);
    }

    // Method specific to Dog class
    makeSound() {
        console.log(`${this.name} barks! Woof Woof!`);
    }
}

// Testing the overridden method
myDog.displayInfo(); // Output: Dog - Name: Buddy, Age: 5, Color: Brown, Legs: 4



class Statistics {
    constructor(data) {
        this.data = data.sort((a, b) => a - b); // Sort data in ascending order
    }

    count() {
        return this.data.length;
    }

    sum() {
        return this.data.reduce((acc, curr) => acc + curr, 0);
    }

    min() {
        return this.data[0];
    }

    max() {
        return this.data[this.data.length - 1];
    }

    range() {
        return this.max() - this.min();
    }

    mean() {
        return this.sum() / this.count();
    }

    median() {
        const mid = Math.floor(this.count() / 2);
        if (this.count() % 2 === 0) {
            return (this.data[mid - 1] + this.data[mid]) / 2;
        } else {
            return this.data[mid];
        }
    }

    mode() {
        let freq = {};
        this.data.forEach(num => {
            freq[num] = freq[num] || 0;
            freq[num]++;
        });

        let mode = { mode: null, count: 0 };
        Object.entries(freq).forEach(([key, value]) => {
            if (value > mode.count) {
                mode.mode = parseInt(key);
                mode.count = value;
            }
        });

        return mode;
    }

    var() {
        const mean = this.mean();
        const squaredDiffs = this.data.map(num => (num - mean) ** 2);
        return squaredDiffs.reduce((acc, curr) => acc + curr, 0) / this.count();
    }

    std() {
        return Math.sqrt(this.var());
    }

    freqDist() {
        let freqDist = {};
        this.data.forEach(num => {
            freqDist[num] = freqDist[num] || 0;
            freqDist[num]++;
        });

        return Object.entries(freqDist)
            .map(([key, value]) => [value, parseInt(key)])
            .sort((a, b) => b[0] - a[0]);
    }
}

// Sample data
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];

// Create instance of Statistics class
const statistics = new Statistics(ages);

// Testing the methods
console.log('Count:', statistics.count()); // 25
console.log('Sum: ', statistics.sum()); // 744
console.log('Min: ', statistics.min()); // 24
console.log('Max: ', statistics.max()); // 38
console.log('Range: ', statistics.range()); // 14
console.log('Mean: ', statistics.mean()); // 30
console.log('Median: ', statistics.median()); // 29
console.log('Mode: ', statistics.mode()); // { mode: 26, count: 5 }
console.log('Variance: ', statistics.var()); // 17.5
console.log('Standard Deviation: ', statistics.std()); // 4.2
console.log('Frequency Distribution: ', statistics.freqDist()); // [[5, 26], [4, 27], [4, 32], [4, 37], [3, 31], [3, 24], [2, 34], [2, 33], [1, 38], [1, 29], [1, 25]]
