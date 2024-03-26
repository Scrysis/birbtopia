/*   Not meant to be used on a route; this schema is designed to be used
inside of a birb object. */

const { Schema, model } = require("mongoose");

const appearanceSchema = new Schema({
  
  birbBody:{
    type: String,
    required: true,
  },
  birbEyes:{
    type: String,
    required: true,
  },  
  birbAppearance: {
    type: String,
    required: true,
    default: storeAppearance(),
  },
  
    methods:
    {
      storeAppearance(){
        return(
          `<div>
            <img
              style="height: 100%; width: 100%"
              src="${this.birbBody}"
            />
            <img
              style="height: 100%; width: 100%"
              src="${this.birbEyes}"
              />
          </div>`
          
        );
      }
    }
  
});

const Appearance = model("Appearance", appearanceSchema);

module.exports = Appearance;
