const { Schema, model } = require("mongoose");

const birbSchema = new Schema({
  birbname: {
    type: String,
    required: true,
  },
  appearance: {
    type: Schema.Types.ObjectId,
    ref: "appearance",
  },
  food: {
    type: Number,
    default: 100,
  },
  happiness: {
    type: Number,
    default: 100,
  },
  lastTimeFed: {
    type: Date,
    default: Date.now,
  },
  lastTimePetted: {
    type: Date,
    default: Date.now,
  },
  health: {
    type: Number,
    default: 100,
  },
  magic: {
    type: Number,
    default: 100,
  },
  stamina: {
    type: Number,
    default: 100,
  },
});

const Birb = model("Birb", birbSchema);

module.exports = Birb;
