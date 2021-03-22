const path = require("path")

module.exports = function(app) {
    //Index Page
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    })

    //Stats Page
    app.get("/stats", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"))
    })

    //Exercise Page
    app.get("/exercise", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/exercise.html"))
    })
}