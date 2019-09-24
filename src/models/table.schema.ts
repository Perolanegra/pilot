import * as mongoose from 'mongoose';

export const TableSchema = new mongoose.Schema({
    id_place: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        maxlength: 300,
        default: null
    },
    name: {
        type: String,
        default: null
    },
})