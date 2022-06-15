const keys = require('../keys')

module.exports = function(email) {
    return {
        to: email,
        from: keys.EMAIL_FROM,
        subject: 'Registration successful',
        html: `
            <h1>Welcome, ${email}</h1>
            <p>Congratulations, your account has been successfully created!</p>
            <hr />
            <a href="${keys.BASE_URL}">Course shop</a>
        `
    }
}