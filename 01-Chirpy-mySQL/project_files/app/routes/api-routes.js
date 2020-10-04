

// Dependencies
// =============================================================
var connection = require("../config/connection.js");

// Routes
// =============================================================
module.exports = function (app) {
  // Get all chirps
  app.get("/api/all", function (req, res) {
    var dbQuery = "SELECT * FROM chirps";

    connection.query(dbQuery, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
  });

  // Add a chirp
  app.post("/api/new", function (req, res) {
    // console.log("Chirp Data:");
    console.log(req.chirp);

    var dbQuery = "INSERT INTO chirps (author, chirp, time) VALUES (?,?,?)";

    connection.query(dbQuery, [req.body.author, req.body.chirp, req.body.time], function (err, result) {
      if (err) throw err;
      console.log("Chirp Successfully Saved!");
      res.end();
    });
  });
};

