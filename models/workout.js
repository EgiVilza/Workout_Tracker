const mongoose = require("mongoose")
const Schema = mongoose.Schema

var workoutSchema = new Schema({
    day: { type: Date, required: true, default: Date.now() },
    totalDuration: {
        type: Number,
        default: 0,
    },
    totalDistanceCovered: {
        type: Number,
        default: 0,
    },
    exercises: [{
        type: { type: String, required: true },
        name: { type: String, required: true },
        duration: {type: Number, required: true },
        distance: { type: Number, required: false},
        weight: { type: Number, required: false },
        reps: { type: Number, required: false },
        sets: { type: Number, required: false }
    }]
})

const Workout = mongoose.model("Workout", workoutSchema)

module.exports = Workout;