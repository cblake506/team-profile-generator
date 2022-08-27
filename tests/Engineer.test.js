const Engineer = require('../lib/Engineer');
describe('Engineer class', () => {
    it('Creates an engineer', () => {
        const engineer = new Engineer('Alec', 2, 'Alec@email.com', 'ibealec');

        expect(engineer.name).toEqual('Alec');
        expect(engineer.id).toEqual(2);
        expect(engineer.email).toEqual('Alec@email.com');
        expect(engineer.github).toEqual('ibealec');

    });

    const engineer = new Engineer('Alec', 2, 'Alec@email.com', 'ibealec');
    it('gets the name', () => {
        expect(engineer.getName()).toEqual('Alec'); 
    }),

    it('gets the id', () => {
        expect(engineer.getId()).toEqual(2); 
    }),
    it('gets the email', () => {
        expect(engineer.getEmail()).toEqual('Alec@email.com'); 
    }),
    it('gets the role', () => {
        expect(engineer.getRole()).toEqual('Engineer'); 
    }),
    it('gets the github', () => {
        expect(engineer.getGithub()).toEqual('ibealec'); 
    })
});
