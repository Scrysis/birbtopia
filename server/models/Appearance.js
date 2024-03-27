/*   Not meant to be used on a route; this schema is designed to be used
inside of a birb object. */


const { Schema, model } = require("mongoose");

const appearanceSchema = new Schema({
  
  birbBody:{
    type: String,
    default: generateBirbBody(),
  },
  birbEyes:{
    type: String,
    default: generateBirbEyes(),
  },  
  birbAppearance: {
    type: String,
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
      },
      generateBirbBody(){
        var birbBodNum = Math.floor(Math.random() * 12);

        return `client/src/assets/birb/body${birbBodNum}.png`;
      },
      generateBirbEyes(){
        var birbEyeNum = Math.floor(Math.random() * 5);

        return `client/src/assets/birb/eye${birbEyeNum}.png`;
      }
    }
  
});

const Appearance = model("appearance", appearanceSchema);

module.exports = Appearance;
