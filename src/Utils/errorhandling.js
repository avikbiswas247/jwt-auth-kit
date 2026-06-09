class AuthError extends Error {
    constructor(message) {
        super(message);
        this.name = "AuthError";
        this.statusCode = 401;
    }
}
class RoleError extends Error {
    constructor(message) {
        super(message);
        this.name = "RoleError";
        this.statusCode = 403;
    }
}
module.exports = {
    AuthError,
    RoleError
}