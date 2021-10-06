const { Schema, Types } = require('mongoose');

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
                required: 'Please select an exercise type'
            },
            name: {
                type: String,
                required: 'Please provide an exercise name'
            },
            duration: {
                type: Number,
                required: 'Please provide an exercise duration'
            },
            distance: Number,
            weight: Number,
            reps: Number,
            sets: Number
        }
    ]
}
);
  

  module.exports = workoutSchema;
  