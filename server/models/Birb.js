const {Schema, model} = require('mongoose');

const birbSchema = new Schema(
    {
        birbName: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 28,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timeStamp => new Date(timeStamp).toLocaleString()
        },
        username: {
            type: String,
            required: true
        },
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
)

const Birb = model('Birb', birbSchema);

module.exports=Birb;