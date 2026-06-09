import {generateToken, varifyToken} from '../core/token.js';
import {JWT_SECRET} from '../utils/config.js';
describe('Token Generation and Verification', () => {
    const payload = { userId: '12345', role: 'user' };
    let token;
    it('should generate a valid token', () => {
        token = generateToken(payload, JWT_SECRET);
        expect(token).toBeDefined();
    });
    it('should verify a valid token', () => {
        const decoded = varifyToken(token, JWT_SECRET);
        expect(decoded).toMatchObject(payload);
    });
    it('should return null for an invalid token', () => {
        const invalidToken = token + 'invalid';
        const decoded = varifyToken(invalidToken, JWT_SECRET);
        expect(decoded).toBeNull();
    });
    it('should return null for an expired token', (done) => {
        const shortLivedToken = generateToken(payload, JWT_SECRET, { expiresIn: '1s' });
        setTimeout(() => {
            const decoded = varifyToken(shortLivedToken, JWT_SECRET);
            expect(decoded).toBeNull();
            done();
        }, 2000);
    });
});