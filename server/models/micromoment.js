const mongoose = require("mongoose")

const micromomentSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    time: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tip: {
        type: String,
        required: true
    },
    example: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Micromoment", micromomentSchema)