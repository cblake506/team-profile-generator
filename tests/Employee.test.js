const Employee = require('../lib/Employee');
describe('Employee class', () => {
    it('Creates an employee', () => {
        const employee = new Employee('Jason', 100, 'Jason@email.com');

        expect(employee.name).toEqual('Jason');
        expect(employee.id).toEqual(100);
        expect(employee.email).toEqual('Jason@email.com');

        // expect(word.letters[0]).toBeInstanceOf(Letter);
    });

    const employee = new Employee('Jason', 100, 'Jason@email.com');
    it('gets the name', () => {
        expect(employee.getName()).toEqual('Jason'); 
    }),

    it('gets the id', () => {
        expect(employee.getId()).toEqual(100); 
    }),
    it('gets the email', () => {
        expect(employee.getEmail()).toEqual('Jason@email.com'); 
    }),
    it('gets the role', () => {
        expect(employee.getRole()).toEqual('Employee'); 
    })
});
