const mongoose = require('mongoose');

const workoutSchema = new Schema(
    {
      day: {
        type: Date,
        default: Date.now
      },
      exercises: [
        {
            type: {
                type: String,
                
            },
            name: {
                type: String,
                required: 'Please provide an exercise name'
            },
            weight: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            duration: {
                type: Number,
            },
            distance: {
                type: Number,
            },
        },
    ]
});
const Workout = mongoose.model('Workout', workoutSchema)
  

  module.exports = Workout;
  