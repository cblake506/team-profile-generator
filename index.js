const inquirer = require('inquirer');

inquirer
.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the employee?',
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


class Employee {
    constructor (name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "employee"
    }
    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return this.role;
    }
}