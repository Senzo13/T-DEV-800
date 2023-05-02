import mongoose from 'mongoose'

/**
 *
 * @class Sensor
 * @module Sensor
 * @constructor Sensor
 * @param {Number} count - The count of the sensor.
 *
 */

const sensorSchema = new mongoose.Schema({
  name: {
    type: String,
    default: null,
  },
  value: {
    type: Number,
    default: 0,
  },
})

export const Sensor = mongoose.model('Sensor', sensorSchema)

/**
 * Create default sensor when the database is empty.
 **/

Sensor.find().then((sensors) => {
  if (sensors.length === 0) {
    const sensor = new Sensor({
      count: 0,
    })
    sensor.save()
  }
})
