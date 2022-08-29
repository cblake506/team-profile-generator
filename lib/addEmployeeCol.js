const addEmployeeCol = (start, employee) => {
    let special = '';
    console.log('the role is: ' + employee.getRole());
    switch(employee.getRole()){
        case 'Manager':
            special = `Office number: ${employee.getOfficeNumber()}`;
            break;
        case 'Engineer':
            special =  `Github: ${employee.getGithub()}`;
            break;
        case 'Intern':
            special = `School: ${employee.getSchool()}`;
            break;
        default:
            console.log('error adding column');
    }
    return `${start}
    <div class="col">
        <div class="card shadow-sm">
            <div class="card-body">
                <h2 class="card-text">${employee.getName()}</h2>
                <h2 class="card-text">${employee.getRole()}</h2>
                <p class="card-text">ID: ${employee.getId()}</p>
                <p class="card-text">Email: ${employee.getEmail()}</p>
                <p class="card-text">${special}</p>
            </div>
        </div>
    </div>
    `
}

module.exports = {addEmployeeCol};