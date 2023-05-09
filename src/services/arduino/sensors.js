import { Sensor } from '../arduino/../../models/arduino/sensors.js'
import { logMessage } from '../../utils/custom_console.js'
import dotenv from 'dotenv'
dotenv.config()

const SECRET = process.env.SECRET_KEY

/**
 *
 * @function getSensorByIdService - GET A SENSOR BY ID.
 *
 * @param {String} id - The id of the sensor.
 * @param {Object} response - The response object.
 * @returns {Promise} - The promise object of the sensor.
 *
 **/

export const getSensorByIdService = async (data) => {
  logMessage('calling', 'getSensorByIdService...')
  const { id, key, response } = data
  return new Promise(async (resolve, reject) => {
    try {
      const sensor = await Sensor.findById(id)
      if (!sensor) {
        logMessage('warning', 'Sensor not found')
        return response.status(404).json({ message: 'Sensor not found' })
      }
      if (key !== SECRET) {
        logMessage('access denied', '401')
        return response.status(401).json({ message: 'Unauthorized' })
      }
      logMessage('response', response.statusCode)
      resolve(sensor)
    } catch (error) {
      logMessage('error', error)
      reject(error)
    }
  })
}

/**
 *
 * @function getSensorAllService - GET ALL SENSORS.
 *
 * @param {Object} response - The response object.
 * @returns {Promise} - The promise object of the sensors.
 *
 **/

export const getSensorAllService = async (data) => {
  logMessage('calling', 'getSensorAllService...')
  const { key, response } = data
  return new Promise((resolve, reject) => {
    try {
      const sensors = Sensor.find()
      if (key !== SECRET) {
        logMessage('access denied', '401')
        return response.status(401).json({ message: 'Unauthorized' })
      }
      logMessage('response', response.statusCode)
      resolve(sensors)
    } catch (error) {
      logMessage('error', error)
      reject(error)
    }
  })
}

/**
 *
 * @function getSensorByNameService - GET SENSOR DATA BY NAME.
 * @param {String} name - The name of the sensor.
 * @param {Object} response - The response object.
 * @returns {Promise} - The promise object of the sensors.
 *
 **/

export const getSensorByNameService = async (data) => {
  logMessage('calling', 'getsensorByname...')
  const { key, name, response } = data
  return new Promise((resolve, reject) => {
    try {
      const sensors = Sensor.find(name)
      if (key !== SECRET) {
        logMessage('access denied', '401')
        return response.status(401).json({ message: 'Unauthorized' })
      }
      logMessage('response', response.statusCode)
      resolve(sensors)
    } catch (error) {
      logMessage('error', error)
      reject(error)
    }
  })
}

/**
 * @function deleteSensorService - DELETE A SENSOR.
 * @param {String} id - The id of the sensor.
 * @param {Object} response - The response object.
 * @returns {Promise} - The promise object of the sensor.
 */

export const deleteSensorService = async (data) => {
  logMessage('calling', 'deleteSensorService...')
  const { id, key, response } = data
  return new Promise(async (resolve, reject) => {
    try {
      const sensor = await Sensor.findByIdAndDelete(id)
      if (!sensor) {
        logMessage('warning', 'Sensor not found')
        return response.status(404).json({ message: 'Sensor not found' })
      }
      if (key !== SECRET) {
        logMessage('access denied', '401')
        return response.status(401).json({ message: 'Unauthorized' })
      }
      logMessage('response', response.statusCode)
      resolve(sensor)
    } catch (error) {
      logMessage('error', error)
      reject(error)
    }
  })
}

/**
 *
 * @function createSensorService - CREATE A SENSOR.
 *
 * @param {Number} value - The value of the sensor.
 * @param {String} name - The name of the sensor.
 * @param {Object} response - The response object.
 * @returns {Promise} - The promise object of the sensor.
 *
 **/

export const createSensorService = async (data) => {
  logMessage('calling', 'createSensorService...')
  const { response, value, name, key } = data
  return new Promise((resolve, reject) => {
    try {
      const sensor = new Sensor({
        value: value,
        name: name,
      })
      if (key !== SECRET) {
        logMessage('access denied', '401')
        return response.status(401).json({ message: 'Unauthorized' })
      }
      sensor.save()
      logMessage('response', response.statusCode)
      resolve(sensor)
    } catch (error) {
      logMessage('error', error.message)
      reject(error)
    }
  })
}

/**
 *
 * @function updateSensorService - UPDATE A SENSOR.
 *
 * @param {String} id - The id of the sensor.
 * @param {Number} value - The count of the sensor.
 * @param {Object} response - The response object.
 * @returns {Promise} - The promise object of the sensor.
 *
 **/

export const updateSensorService = async (data) => {
  logMessage('calling', 'updateSensorService...')
  const { id, value, key, name, response } = data
  return new Promise(async (resolve, reject) => {
    try {
      const sensor = await Sensor.findById(name)
      if (!sensor) {
        return response.status(404).json({ message: 'Sensor not found' })
      }
      if (key !== SECRET) {
        logMessage('access denied', '401')
        return response.status(401).json({ message: 'Unauthorized' })
      }
      sensor.value = value
      try {
        await sensor.save()
        logMessage('response', response.statusCode)
        resolve(sensor)
      } catch (saveError) {
        console.error('Error: save() method failed on sensor object')
        reject(saveError)
      }
    } catch (error) {
      logMessage('error', error)
      reject(error)
    }
  })
}
