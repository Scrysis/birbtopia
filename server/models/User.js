const {Schema, model} = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match: [/\w+@\w+\.\w{2,}/,'Please enter a valid email address.']
        },
        birbs: [{
            type: Schema.Types.ObjectId,
            ref: 'Birb'
        }],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
)

userSchema.virtual('birbCount').get(function(){
    return this.birbs.length;
})

const User = model('User', userSchema);

module.exports=User;