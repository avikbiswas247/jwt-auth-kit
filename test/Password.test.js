import {hashPassword, verifyPassworsd} from '../src/core/password.js';
describe('Password Hashing and Verification', () => {
    const password = 'my_secure_password';
    let hashedPassword; 
    it('should hash the password', async () => {
        hashedPassword = await hashPassword(password);
        expect(hashedPassword).toBeDefined();
        expect(hashedPassword).not.toBe(password); 
    });
    it('should verify the correct password', async () => {
        const isMatch = await verifyPassworsd(password, hashedPassword);
        expect(isMatch).toBe(true);
    });
    it('should not verify an incorrect password', async () => {
        const isMatch = await verifyPassworsd('wrong_password', hashedPassword);
        expect(isMatch).toBe(false);
    });
});
