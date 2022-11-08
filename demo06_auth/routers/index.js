const authRouter = require('./auth.router');
const homeRouter = require('./home.router');
const recipeRouter = require('./recipe.router');

const router = require('express').Router();

router.use('/recipe', recipeRouter);
router.use('/auth', authRouter);
router.use('/', homeRouter);

module.exports = router;