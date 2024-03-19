/*   Not meant to be used on a route; this schema is designed to be used
inside of a birb object. */

const {Schema, Model} = require("mongoose");

const appearanceSchema = new Schema({
    shapeArray: [String],
    eyeArray: [String],
    beakArray: [String],
    colorArray: [String],
    birbAppearance: {
        type: String,
        required: true,
    },
});


const Appearance = model("appearance", appearanceSchema);

module.exports = Appearance;