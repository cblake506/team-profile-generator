const Engineer = require('../lib/Engineer');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');
const inquirer = require('inquirer');
const inquireManager = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'id',
            message: 'What is the id of the employee?',
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the employee?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the employee?',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the office number of the employee?',
        }
    ])
    .then((answers) => {
        return newManager = new Manager(answers);
        // const newEmployee = new Employee(answers);
    });
}

const inquireEngineer = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'id',
            message: 'What is the id of the employee?',
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the employee?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the employee?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the github of the employee?',
        }
    ])
    .then((answers) => {
        return newEngineer = new Engineer(answers);
    });
}

const inquireIntern = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'id',
            message: 'What is the id of the employee?',
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the employee?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the employee?',
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the school of the employee?',
        }
    ])
    .then((answers) => {
        return newIntern = new Intern(answers);
    });
}

module.exports = {inquireManager, inquireEngineer, inquireIntern};