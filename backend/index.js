var express = require("express");
var cors = require("cors");
var fs = require("fs");
var app = express();

/**
 * CORS
 */
app.use(cors());

/**
 * Body Parser
 */
const bodyParser = require("body-parser");
app.use(bodyParser.json());

/**
 * Array of students
 */
var students = [
    {id: 1, nombre: "Diego", edad: 22}
]

/**
 * Test if app is running
 */
app.get("/", (req, res) => {
    res.status(200).send("OK");
});

/**
 * Open json of heroes
 */
app.get("/heroes", (req, res) => {
    fs.readFile("./data.json", "utf8", (err, data) => {
      if (err) throw err;
      res.status(200).send(JSON.parse(data));  
    })
});

/**
 * Get list of students
 */
app.get("/students", (req, res) => {
    res.status(200).send(students);
})

/**
 * Add student
 */
app.put("/student", (req, res) => {
    var nombre = req.body.nombre;
    var edad = req.body.edad;

    //Check if all data is present
    if (!nombre || !edad) {
        res.status(400).send("Complete todos los datos");
    }
    else {
        students.push({id: students.length + 1, nombre: nombre, edad: edad});
        res.status(200).send("Estudiante agregado a la lista");
    }
});

/**
 * Remove student
 */
app.delete("/student/:id", (req, res) => {
    //Filter students by id
    student = students.filter(x => x.id == req.params.id);

    //Check if student with given id exists
    if (!student) {
        res.status(400).send("Estudiante inexistente");
    }
    else {
        var index = students.indexOf(student[0]);
        students.splice(index, 1);

        res.status(200).send("Estudiante eliminado con exito");
    }
})

app.listen(3000, function() {
    console.log("App is running in port 3000");
});