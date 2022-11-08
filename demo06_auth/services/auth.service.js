const Member = require('../models/member');
const argon2 = require('argon2');

const authService = {

    checkAccountExists: async ({ pseudo, email }) => {
        const member = await Member.findOne({ $or: [{ pseudo }, { email }] });
        return member !== null;
    },

    createAccount: async ({ pseudo, email, password }) => {

        // Hash Pwd
        const hashPwd = await argon2.hash(password);

        // Save in DB
        const member = Member.create({ pseudo, email, hashPwd });

        // Return Member data
        return {
            id: member._id,
            pseudo: member.pseudo,
            email: member.email
        };
    },

    loginAccount: async ({ pseudo, password }) => {

        // Get Member from DB
        const member = await Member.findOne({ pseudo })
        console.log(member);
        if (!member) {
            return null;
        }

        // Check Password
        if (!await argon2.verify(member.hashPwd, password)) {
            return null;
        }

        // Return Member data
        return {
            id: member._id,
            pseudo: member.pseudo,
            email: member.email
        };
    }
};

module.exports = authService;