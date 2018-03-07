'use strick';

var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/sandbox");

var db = mongoose.connection;

db.on("error", function(err) {
    console.error("connection error:", err);
});

db.once("open", function() {
    console.log("db connection successful");
    // All database communication goes here

    // Creat database schema
    var Schema = mongoose.Schema;
    var AnimalSchema = new Schema({
        type: String,
        size: String,
        color: String,
        mass: Number,
        name: String,
    });

    // Create a mongoose model
    var Animal = mongoose.model("Animal", AnimalSchema);

    // Creat an animal document from our model
    var elephant = new Animal({
        type: "elephant",
        size: "big",
        color: "gray",
        mass: 6000,
        name: "Lawrence"
    });

    // Save our elephant
    elephant.save(function(err) {
        if (err) console.error("Save Failed.", err);
        else console.log("Saved!");
        db.close(function () {
            console.log("db connection close");
        });
    });
});