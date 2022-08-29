const inquirer = require('inquirer');
const fs = require('fs');
const {inquireManager, inquireEngineer, inquireIntern} = require('./lib/employeeQuestions');
const {addEmployeeCol} = require('./lib/addEmployeeCol');

const inquireEmployeeBasics = () => {
    return inquirer
    .prompt([
        {
            type: 'list',
            name: 'role',
            choices: ["Manager", "Engineer", "Intern"],
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
                console.log("error defining role");
        }
    })
    .then((newEmployee) => {
        return addEmployeeCol(startHtml, newEmployee)
    });
}



const startHtml = 
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

// Bonus using writeFileSync as a promise
const init = () => {
  inquireEmployeeBasics()
    
    // Use writeFileSync method to use promises instead of a callback function
    .then((generateHtml) => fs.writeFileSync('./dist/index.html', `${generateHtml} ${endHtml}`))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
};

init();
