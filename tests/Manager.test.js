const Manager = require('../lib/Manager');
describe('Manager class', () => {
    it('Creates an manager', () => {
        const manager = new Manager('Jared', 10, 'Jared@email.com', 1);

        expect(manager.name).toEqual('Jared');
        expect(manager.id).toEqual(10);
        expect(manager.email).toEqual('Jared@email.com');
        expect(manager.officeNumber).toEqual(1);

    });

    const manager = new Manager('Jared', 10, 'Jared@email.com', 1);
    it('gets the name', () => {
        expect(manager.getName()).toEqual('Jared'); 
    }),

    it('gets the id', () => {
        expect(manager.getId()).toEqual(10); 
    }),
    it('gets the email', () => {
        expect(manager.getEmail()).toEqual('Jared@email.com'); 
    }),
    it('gets the role', () => {
        expect(manager.getRole()).toEqual('Manager'); 
    }),
    it('gets the officeNumber', () => {
        expect(manager.getOfficeNumber()).toEqual(1); 
    })
});
