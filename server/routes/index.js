var express = require('express');
var router = express.Router();
var mysql = require('promise-mysql');

var pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  connectionLimit: 10
});

router.post('/newstudent', async (req, res, nest) => {

  var courseExists = await pool.query(`
  SELECT * FROM students.course
  WHERE id = '${req.body.course}';`)

  if (courseExists.length > 0) {

    var exists = await pool.query(`
        SELECT * FROM students.student
        WHERE password = '${req.body.password}';`)

    if (exists.length > 0) {
      await pool.query(`
        UPDATE students.student
        SET name = '${req.body.name}', age= ${req.body.age}, course= '${req.body.course}', img = '${req.body.img}'
        WHERE password = '${req.body.password}';`)
        res.json({ msg: req.body.name+"'s details were updated successfully!" })
    }

    else {
      result = await pool.query(`
        INSERT INTO students.student (name, password, age, course, img) 
        VALUES('${req.body.name}','${req.body.password}',${req.body.age},${req.body.course},'${req.body.img}');`)
      res.json(result)
    }

  }

  else {
    res.json({ msg: "no such course" })
  }
})

router.post('/newcourse', async (req, res, nest) => {

  var courseExists = await pool.query(`
  SELECT * FROM students.course
  WHERE course_name = '${req.body.course_name}';`)
  if (courseExists.length == 0) {

    result = await pool.query(`
  INSERT INTO students.course (course_name, tutor) 
  VALUES('${req.body.course_name}','${req.body.tutor}');`)
    res.json(result)
  }
  else {
    res.json({ msg: "Oopsi Poopsi! Course Already exists!" })
  }
})


router.get('/viewcourse', async (req, res, next) => {
  var items = await pool.query(`
  Select * FROM students.student 
  WHERE course = '${req.query.courseid}' 
  `)
  var coursetype = await pool.query(`
  Select * FROM students.course 
  WHERE id = '${req.query.courseid}' 
  `)
  await res.json({ items, coursetype })
});

router.get('/deleter', async (req, res, next) =>{
var del = await pool.query(`
DELETE FROM students.student WHERE img='${req.query.img}' AND name='${req.query.name}';
`)
await res.json(del)
})


/* GET home page. */
// router.get('/createdb', async function(req, res, next) {
//   try
//   {
//  await pool.query(`CREATE DATABASE students`)
//  await pool.query(`
//    CREATE TABLE students.student (
//     id INT NOT NULL AUTO_INCREMENT,
//     name VARCHAR(20) NOT NULL,
//     age INT NOT NULL,
//     course INT NOT NULL,
//     img VARCHAR(200) NOT NULL,
//     password VARCHAR(11) NOT NULL,
//     PRIMARY KEY (id)
//     )`);
//  await pool.query(`
//    CREATE TABLE students.course (
//     id INT NOT NULL AUTO_INCREMENT,
//     course_name VARCHAR(20) NOT NULL,
//     tutor VARCHAR(20) NOT NULL,
//     PRIMARY KEY (id)
//     )`);
//     res.send('<h3>DB and Table were created!!!</h3>');
//   }
// catch(err)
// {
//   console.log(err)
// } 
// });

module.exports = router;
