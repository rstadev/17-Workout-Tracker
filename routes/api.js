// const path = require('path');
const db = require('../models')

module.exports = (app) => {
  app.get('/api/workouts', (req,res) => {
    db.Workout.find({}, (err, workouts) => {
    // .then(data => {res.json(data)})
    // .catch(err => {
    //   console.log(err)
    //   res.json(err)
    if (err) {
      console.log(err);
    } else {
      res.json(workouts)
    };
    })
  });

  // app.

};