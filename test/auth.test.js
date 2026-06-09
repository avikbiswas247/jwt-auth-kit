import {authmiddleware} from '../src/middleware/auth.js';
describe('Auth Middleware', () => {
    let req, res, next;
    beforeEach(() => {
        req = {
            headers: {}
        };
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };
        next = jest.fn();
    }
    );
    it('should return 401 if no authorization header', () => {
        authmiddleware(req, res, next);
        expect(res.status).toHaveBeenCalledWith(401);
        expect(res.json).toHaveBeenCalledWith({ message: 'Unauthorized' });
    }); 
    it('should return 401 if token is invalid', () => {
        req.headers.authorization = 'Bearer invalidtoken';
        authmiddleware(req, res, next);
        expect(res.status).toHaveBeenCalledWith(401);
        expect(res.json).toHaveBeenCalledWith({ message: 'Unauthorized' });
    });
    it('should call next if token is valid', () => {   
        const validToken = 'validtoken';
        req.headers.authorization = `Bearer ${validToken}`;
        authmiddleware(req, res, next);
        expect(next).toHaveBeenCalled();
    });
});