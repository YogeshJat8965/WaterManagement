import mongoose from 'mongoose';

const houseSchema = new mongoose.Schema(
    {
        name:{
        type : String,
        required : true,
        },
        history:{
        type : Array,
        ref : "PotentialLeak"
        },

    },{
        timestamps: true
    })

    export const House = mongoose.model('House', houseSchema);