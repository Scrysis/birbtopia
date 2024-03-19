const {Schema, model} = require('mongoose');


const birbSchema = new Schema ({
    birbname: {
        type: String,
        required: true,
    },
    appearance: {
        type: Schema.Types.ObjectId,
        ref: 'appearance',
    },
    food: {
        type: Number,
        required: true,
    },                              
    happiness: {
        type: Number,
        required: true,
    },
    lastTimeFed: {
        type: Date,
        required: true,
        default: Date.now,
    },
    lastTimePetted: {
        type: Date,
        required: true,
        default: Date.now,
    },
    health: {
        type: Number,
        required: true,
    },
    magic: {
        type: Number,
        required: true,
    },
    stamina: {
        type: Number,
        required: true,
    },
});




const Birb = Model("birb", birbSchema);

module.exports = Birb;