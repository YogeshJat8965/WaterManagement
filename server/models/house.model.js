import mongoose from 'mongoose';

const houseSchema = new mongoose.Schema(
    {
        name:{
        type : String,
        required : true,
        }
        

    },{
        timestamps: true
    })

    export const House = mongoose.model('House', houseSchema);


    // history:{
    //     type : Array,
    //     ref : "PotentialLeak"
    //     },