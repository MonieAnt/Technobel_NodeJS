const authController = require('../controllers/auth.controller');


const authRouter = require('express').Router();

authRouter.get('/login', authController.login);
authRouter.post('/login', authController.loginPost);

authRouter.get('/register', authController.register);
authRouter.post('/register', authController.registerPost);

authRouter.get('/logout', authController.logout);

module.exports = authRouter;