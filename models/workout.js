const mongoose = require("mongoose")
const Schema = mongoose.Schema

var workoutSchema = new Schema({
    day: { type: Date, required: true, default: new Date() },
    exercises: [{
        type: { type: String, required: true },
        name: { type: String, required: true },
        duration: {type: Number, required: true },
        weight: { type: Number, required: true },
        reps: { type: Number, required: true },
        sets: { type: Number, required: true }
    }]
})

const Workout = mongoose.model("Workout", workoutSchema)

module.exports = Workout;