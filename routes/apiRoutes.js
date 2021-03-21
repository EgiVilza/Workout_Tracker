const db = require("../models")

module.exports = function(app) {
    app.get("/api/workouts", function(req, res) {
        db.Workout.find({}).then(function(dbWorkouts) {
            res.json(dbWorkouts)
        })
    })

    //Still needs to be worked on
    app.put("/api/images/:id", function(req, res) {
        db.Workout.updateOne({_id: req.params.id}, {}).then(function(dbWorkouts) {
            res.json(dbWorkouts)
        })
    })

    app.get("/api/workouts/range", function(req, res) {
        db.Workout.find({}).then(function(dbWorkouts) {
            res.json(dbWorkouts)
        })
    })
}