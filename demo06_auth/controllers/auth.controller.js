const authService = require("../services/auth.service");


const authController = {

    login: async (req, res) => {
        if(req.session.user) {
            return res.redirect('/');
        }

        res.render('auth/login', { error: undefined });
    },

    loginPost: async (req, res) => {

        // Check DB
        const member = await authService.loginAccount(req.body);
        if (!member) {
            return res.render('auth/login', { error: 'Login invalide !' });
        }

        // Login in session
        req.session.user = member;

        res.redirect('/');
    },

    register: async (req, res) => {
        if(req.session.user) {
            return res.redirect('/');
        }

        res.render('auth/register', { error: undefined });
    },

    registerPost: async (req, res) => {
        const {pseudo, email, password, password2} = req.body;

        // Check if Account Available
        if(await authService.checkAccountExists({pseudo, email})) {
            return  res.render('auth/register', { error: 'Account already exists!' });
        }

        // Check password
        if(password !== password2) {
            return  res.render('auth/register', { error: 'Not same Password!' });
        }

        // Add Account in DB
        const member = await authService.createAccount({pseudo, email, password});

        // Login session
        req.session.user = member;

        return res.redirect('/');
    },

    logout: async (req, res) => {
        // Logout in session
        req.session.destroy();

        res.redirect('/');
    }

}

module.exports = authController;