const db = require("../models")

module.exports = function(app) {
    //Get route for all workouts
    app.get("/api/workouts", function(req, res) {
        db.Workout.find({}).then(function(dbWorkouts) {

            //Add Total Duration
            dbWorkouts.forEach(workout => {
                let durationTotal = 0
                workout.exercises.forEach(exercise => {
                    durationTotal += exercise.duration
                })
                workout.totalDuration = durationTotal
            });

            res.json(dbWorkouts)
        })
    })

    //Put route to add exercise to the current workout
    app.put("/api/workouts/:id", function(req, res) {
        db.Workout.updateOne(
            {_id: req.params.id}, 
            {
                $inc: { totalDuration: req.body.duration },
                $push: { exercises: req.body }
            })
            .then(function(dbWorkouts) {
            res.json(dbWorkouts)
        })
    })

    //To create a workout and add it to the api
    app.post("/api/workouts", function(req, res) {
        db.Workout.create(req.body).then(function(dbWorkouts) {
            res.json(dbWorkouts)
        })
    })

    //Get route to get the combine range for the stats page
    app.get("/api/workouts/range", function(req, res) {
        db.Workout.find({}).then(function(dbWorkouts) {
            res.json(dbWorkouts)
        })
    })

}