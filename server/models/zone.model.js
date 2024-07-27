import mongoose from 'mongoose';

const zoneSchema = new mongoose.Schema(
    {
        name:{
        type : String,
        required : true,
        unique : true
        },

        wards:{
        type : Array,
        required : true,
        unique : true,
        ref : 'Ward'
        },

    },{
        timestamps: true
    })

    export const Zone = mongoose.model('Zone', zoneSchema);