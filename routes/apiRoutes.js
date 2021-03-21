const db = require("../models")

module.exports = function(app) {
    app.get("/api/workouts", function(req, res) {
        db.Workout.find({}).then(function(dbWorkouts) {
            res.json(dbWorkouts)
        })
    })

    //Completes exercise
    app.put("/api/workouts/:id", function(req, res) {
        db.Workout.updateOne({_id: req.params.id}, {exercises: req.body}).then(function(dbWorkouts) {
            res.json(dbWorkouts)
        })
    })

    app.post("/api/workouts", function(req, res) {
        db.Workout.updateOne({exercises: req.body}).then(function(dbWorkouts) {
            res.json(dbWorkouts)
        })
    })

    app.get("/api/workouts/range", function(req, res) {
        db.Workout.find({}).then(function(dbWorkouts) {
            res.json(dbWorkouts)
        })
    })
}