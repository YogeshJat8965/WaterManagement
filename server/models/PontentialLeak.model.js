import mongoose from 'mongoose';

const potentialLeakSchema = new mongoose.Schema(
    {
        house:{
        type : String,

        },

        flowrate:{
        type : Number,
        },

        consumption:{
        type : Number,
        }


    },{
        timestamps: true    
    })

    export const PotentialLeak = mongoose.model('PotentialLeak', potentialLeakSchema);