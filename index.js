const inquirer = require('inquirer');
const fs = require('fs');
const {inquireManager, inquireEngineer, inquireIntern} = require('./lib/employeeQuestions');
const {addEmployeeCol} = require('./lib/addEmployeeCol');
const { start } = require('repl');

const inquireEmployeeBasics = () => {
    return inquirer
    .prompt([
        {
            type: 'list',
            name: 'role',
            choices: ["Manager", "Engineer", "Intern", "Exit (Done adding employees)"],
            message: 'What is the role of the employee?',
        }
    ])
    .then((answers) => {
        switch(answers.role){
            case "Manager":
                return inquireManager();
                break;
            case "Engineer":
                return inquireEngineer();
                break;
            case "Intern":
                return inquireIntern();
                break;
            default:
                console.log("Goodbye");
                return false;
        }
    })
    .then((newEmployee) => {
        if(newEmployee){
            startHtml = addEmployeeCol(startHtml, newEmployee)
            return inquireEmployeeBasics();
        }
        return;
    });
}



var startHtml = 
  `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Document</title>
  </head>
  <body>
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">My Team</h1>
    </div>
  </div>
  
   <div class="album py-5 bg-light">
  
        <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
`

const endHtml = `
        </div>
  </div>
  </div>
</body>
</html>`;


const init = () => {
  inquireEmployeeBasics()
    .then(() => fs.writeFileSync('./dist/index.html', `${startHtml} ${endHtml}`))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
};

init();
