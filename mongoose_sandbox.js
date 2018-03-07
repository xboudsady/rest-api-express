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
        type:   {type: String, default: "goldfish"},
        size:   {type: String, default: "small"},
        color:  {type: String, default: "godlen"},
        mass:   {type: Number, default: 0.007},
        name:   {type: String, default: "Angela"},
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

    // Create a generic object with our AnimaSchema
    var animal = new Animal({}); // Goldfish

    // Override default Animal Object
    var whale = new Animal({
        type:   "whale",
        size:   "big",
        mass:   190500,
        name:   "Fig"
    });

    Animal.remove({}, function(err) {
        if (err) console.error(err);
        elephant.save(function (err) {
            if (err) console.error("Save Failed.", err);
            animal.save(function (err) {
                if (err) console.error("Save Failed.", err);
                whale.save(function(err){
                    if (err) console.error(err);
                    Animal.find( {size: "big"}, function(err, animals) {
                        animals.forEach(function(animal) {
                            console.log(animal.name + " the " + animal.color + " "  + animal.type)
                        });
                        db.close(function () {
                            console.log("db connection close");
                        });
                    });
                });
            });
        });
    });
});

