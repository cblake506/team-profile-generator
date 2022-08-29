const inquirer = require('inquirer');

inquirer
.prompt([
    {
        type: 'list',
        name: 'role',
        choices: ["Manager", "Engineer", "Intern"],
        message: 'What is the role of the employee?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the id of the employee?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the email of the employee?',
    }
  ])
  .then((answers) => {
    const newEmployee = new Employee(answers);
  });