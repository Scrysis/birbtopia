/*   Not meant to be used on a route; this schema is designed to be used
inside of a birb object. */

const { Schema, model } = require("mongoose");

const appearanceSchema = new Schema({
  birbAppearance: {
    type: String,
    required: true,
  },
});

const Appearance = model("Appearance", appearanceSchema);

module.exports = Appearance;
