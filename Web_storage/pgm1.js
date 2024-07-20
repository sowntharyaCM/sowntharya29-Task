// Store personal information in localStorage
localStorage.setItem('firstName', 'John');
localStorage.setItem('lastName', 'Doe');
localStorage.setItem('age', '30');
localStorage.setItem('country', 'United States');
localStorage.setItem('city', 'New York');


// Create a student object
const student = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 25,
    skills: ['HTML', 'CSS', 'JavaScript'],
    country: 'Canada',
    enrolled: {
        courses: ['Web Development', 'JavaScript Fundamentals'],
        dates: ['2024-07-01', '2024-08-15']
    }
};

// Store the student object in localStorage
localStorage.setItem('student', JSON.stringify(student));

// Define personAccount object with methods
const personAccount = {
    firstName: 'Alice',
    lastName: 'Johnson',
    incomes: [],
    expenses: [],

    addIncome: function(description, amount) {
        this.incomes.push({ description, amount });
        this.updateStorage();
    },

    addExpense: function(description, amount) {
        this.expenses.push({ description, amount });
        this.updateStorage();
    },

    totalIncome: function() {
        return this.incomes.reduce((total, income) => total + income.amount, 0);
    },

    totalExpense: function() {
        return this.expenses.reduce((total, expense) => total + expense.amount, 0);
    },

    accountInfo: function() {
        return `${this.firstName} ${this.lastName}:\nTotal Income: ${this.totalIncome()}\nTotal Expense: ${this.totalExpense()}`;
    },

    accountBalance: function() {
        return this.totalIncome() - this.totalExpense();
    },

    updateStorage: function() {
        localStorage.setItem('personAccount', JSON.stringify(this));
    }
};

// Example usage:
personAccount.addIncome('Salary', 3000);
personAccount.addIncome('Freelance', 1500);
personAccount.addExpense('Rent', 1000);
personAccount.addExpense('Food', 500);

// Store the personAccount object in localStorage initially
localStorage.setItem('personAccount', JSON.stringify(personAccount));
