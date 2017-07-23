var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var session = require('express-session');
var Student = require('../schemas/student');

router.use(bodyParser.json());

router.get('/', function (req, res) {
    res.render('home');
});

router.get('/calendar', function (req, res) {
    console.log('Student schema: ', Student);
    //res.send('Calendar View');
    res.render('calendar', {
        //students: ['s1', 's2', 's3']
        student: 'Ramya',
        students: ['Student 1', 'Student 2', 'Student 3']
    }, function (err, data) {
        if (err) {
            console.log('CALENDAR VIEW ERROR');
            console.log(err);
        }
        else {
            getStudents();
            res.send(data);
            console.log("calendar view rendered");
        }
    });
});

//not finding students, which means not connected to correct db
const getStudents = () => {
    console.log('in getStudents');
    let students_array = [];
    Student.find(function (err, students) {
        if (err) {
            console.log(err);
        }
        else {
            console.log('students: ', students);
            for (var i = 0; i < students.length; i++) {
                students_array.push(students[i]);
            }
            console.log('students_array: ', students_array);
        }
    });

    /*
    Student.find({}).toArray(function(err, students) {
        if (err) {
            console.log(err);
        }
        console.log(students);
    });
    */
}

module.exports = router;