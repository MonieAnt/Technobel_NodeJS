const mongoose = require('mongoose');

const memberSchema = mongoose.Schema({
    pseudo: {
        type: String,
        required: true,
        trim: true
    },
    email:  {
        type: String,
        required: true,
        trim: true
    },
    hashPwd:  {
        type: String,
        required: true,
    },
}, {
    collection: 'Member',
    timestamps: true
});

const Member = mongoose.model('Member', memberSchema);

module.exports = Member;