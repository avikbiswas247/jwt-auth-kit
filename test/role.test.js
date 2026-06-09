import {roleMiddleware} from '../src/Middleware/role.js';
describe('Role Middleware', () => {
    let req, res, next;
    beforeEach(() => {
        req = {
            user: {
                role: 'user'
            }
        };
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };
        next = jest.fn();
    });
    it('should return 401 if no user', () => {
        req.user = null;
        roleMiddleware(['admin'])(req, res, next);
        expect(res.status).toHaveBeenCalledWith(401);
        expect(res.json).toHaveBeenCalledWith({ message: 'Unauthorized' });
    });
    it('should return 403 if user role is not allowed', () => {
        roleMiddleware(['admin'])(req, res, next);
        expect(res.status).toHaveBeenCalledWith(403);
        expect(res.json).toHaveBeenCalledWith({ message: 'Forbidden' });
    });
    it('should call next if user role is allowed', () => {
        roleMiddleware(['user'])(req, res, next);
        expect(next).toHaveBeenCalled();
    });
});