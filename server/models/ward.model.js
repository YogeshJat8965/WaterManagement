import mongoose from 'mongoose';

const wardSchema = new mongoose.Schema(
    {
        houseid:{
        type : Array,
        required : true,
        unique : true ,
        ref : 'House'   
        },
        name:{
        type : String,
        required : true,

        }
    },{
        timestamps: true
    })

    export const Ward = mongoose.model('Ward', wardSchema);