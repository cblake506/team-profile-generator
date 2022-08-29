const inquirer = require('inquirer');
const fs = require('fs');

const inquireEmployeeBasics = () => {
    return inquirer
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
        // const newEmployee = new Employee(answers);
    });
}



const generateHTML = () =>
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



        </div>
  </div>
  </div>
</body>
</html>`;

// Bonus using writeFileSync as a promise
const init = () => {
  inquireEmployeeBasics()
    // Use writeFileSync method to use promises instead of a callback function
    .then(() => fs.writeFileSync('index.html', generateHTML()))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
};

init();

const addEmployeeCol = (start, name, role, id, email, special) => {
    return `${start}
    <div class="col">
        <div class="card shadow-sm">
            <div class="card-body">
                <h2 class="card-text">${name}</h2>
                <h2 class="card-text">${role}</h2>
                <p class="card-text">ID: ${id}</p>
                <p class="card-text">Email: ${email}</p>
                <p class="card-text">${special}</p>
            </div>
        </div>
    </div>
    `
}