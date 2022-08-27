const Intern = require('../lib/Intern');
describe('Intern class', () => {
    it('Creates an intern', () => {
        const intern = new Intern('John', 5, 'John@email.com', 'University of Texas');

        expect(intern.name).toEqual('John');
        expect(intern.id).toEqual(5);
        expect(intern.email).toEqual('John@email.com');
        expect(intern.school).toEqual('University of Texas');

    });

    const intern = new Intern('John', 5, 'John@email.com', 'University of Texas');
    it('gets the name', () => {
        expect(intern.getName()).toEqual('John'); 
    }),

    it('gets the id', () => {
        expect(intern.getId()).toEqual(5); 
    }),
    it('gets the email', () => {
        expect(intern.getEmail()).toEqual('John@email.com'); 
    }),
    it('gets the role', () => {
        expect(intern.getRole()).toEqual('Intern'); 
    }),
    it('gets the school', () => {
        expect(intern.getSchool()).toEqual('University of Texas'); 
    })
});
