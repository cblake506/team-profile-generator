const addEmployeeCol = (start, employee) => {
    let special = '';
    switch(employee.getRole()){
        case 'Manager':
            special = `Office number: ${employee.getOfficeNumber()}`;
            break;
        case 'Engineer':
            special =  `Github: 
            <a href="github.com/${employee.getGithub()}">${employee.getGithub()}</a>
            `;
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
                        <p class="card-text">Email: 
                            <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a>
                        </p>
                        <p class="card-text">${special}</p>
                    </div>
                </div>
            </div>
    `
}

module.exports = {addEmployeeCol};