import * as mongoose from 'mongoose';

export const VisitSchema = new mongoose.Schema({
    id_users: {
        type: Array,
        required: true
    },
    id_table: {
        type: String,
        required: true
    },
    id_place: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    deleted_at: {
        type: Date,
        default: null
    },
    updated_at: {
        type: Date,
        default: null
    }
});