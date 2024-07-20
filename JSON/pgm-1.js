const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python'];
const skillsJSON = JSON.stringify(skills);
console.log(skillsJSON);

let age = 250;
const ageJSON = JSON.stringify(age);
console.log(ageJSON);

let isMarried = true;
const isMarriedJSON = JSON.stringify(isMarried);
console.log(isMarriedJSON);

const student = {
    firstName: 'Asabeneh',
    lastName: 'Yetayehe',
    age: 250,
    isMarried: true,
    skills: ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
};

const studentJSON = JSON.stringify(student);
console.log(studentJSON);

const students = [
    {
        firstName: 'Alex',
        lastName: 'Smith',
        skills: ['HTML', 'CSS', 'JavaScript']
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        skills: ['HTML', 'CSS', 'JavaScript', 'React']
    }
];

const studentsJSON = JSON.stringify(students, ['firstName', 'lastName', 'skills']);
console.log(studentsJSON);

const parsedTxt = JSON.parse(txt);
console.log(parsedTxt);

// Find the user with the most skills
let maxSkills = 0;
let skillfulUser = '';

for (const user in parsedTxt) {
    if (parsedTxt[user].skills.length > maxSkills) {
        maxSkills = parsedTxt[user].skills.length;
        skillfulUser = user;
    }
}

console.log(`User with the most skills: ${skillfulUser}`);
console.log(parsedTxt[skillfulUser]);
