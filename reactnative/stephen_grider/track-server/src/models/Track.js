const moongose = require('mongoose');

const trackSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    name: {
        type: String,
        default: ''
    },

    locations: []
});