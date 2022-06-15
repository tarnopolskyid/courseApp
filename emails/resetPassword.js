const keys = require('../keys')

module.exports = function(email, token) {
    return {
        to: email,
        from: keys.EMAIL_FROM,
        subject: 'Reset password',
        html: `
            <h1>Hello, ${email}</h1>
            <p>Use the link below to set up new password:</p>
            <p><a href="${keys.BASE_URL}/auth/password/${token}">Reset password</a></p>
            <hr />
            <a href="${keys.BASE_URL}">Course shop</a>
        `
    }
}