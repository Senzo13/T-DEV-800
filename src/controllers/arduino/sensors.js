import {
  getSensorByIdService,
  getSensorAllService,
  createSensorService,
  updateSensorService,
  getSensorByNameService,
  deleteSensorService,
} from '../../services/arduino/sensors.js'

/** @function getSensorById - GET A SENSOR BY ID. */
const getSensorById = async (req, res) => {
  const response = res
  const { id, key } = req.params
  getSensorByIdService({ id, key, response })
    .then((sensor) => {
      res.status(200).json(sensor)
    })
    .catch((error) => {
      console.error(error)
      res.status(500).json({ message: error.message })
    })
}

/** @function getSensorByName - GET ALL SENSORS. */
const getSensorByName = async (req, res) => {
  const response = res
  const { key } = req.params
  const { name } = req.body
  getSensorByNameService({ response, name, key })
    .then((sensor) => {
      res.status(200).json(sensor)
    })
    .catch((error) => {
      console.error(error)
      res.status(500).json({ message: error.message })
    })
}

/** @function getSensorAll - GET ALL SENSORS. */
const getSensorAll = async (req, res) => {
  const response = res
  const key = req.params.key
  getSensorAllService({ response, key })
    .then((sensors) => {
      res.status(200).json(sensors)
    })
    .catch((error) => {
      console.error(error)
      res.status(500).json({ message: error.message })
    })
}

/** @function createSensor - CREATE A NEW SENSOR. */
const createSensor = async (req, res) => {
  const response = res
  const { key } = req.params
  const { name, value } = req.body
  createSensorService({ response, name, value, key })
    .then((sensor) => {
      res.status(200).json(sensor)
    })
    .catch((error) => {
      console.error(error)
      res.status(500).json({ message: error.message })
    })
}

/** @function updateSensor - UPDATE A SENSOR. */
const updateSensor = async (req, res) => {
  const response = res
  const { value, name } = req.body
  updateSensorService({ response, name, value })
    .then((sensor) => {
      res.status(200).json(sensor)
    })
    .catch((error) => {
      console.error(error)
      res.status(500).json({ message: error.message })
    })
}

/**@function deleteSensor - DELETES A SENSOR */
const deleteSensor = async (req, res) => {
  const response = res
  const { id, key } = req.params
  deleteSensorService({ response, id, key })
    .then((sensor) => {
      res.status(200).json(sensor)
    })
    .catch((error) => {
      console.error(error)
      res.status(500).json({ message: error.message })
    })
}

export {
  getSensorById,
  getSensorAll,
  createSensor,
  deleteSensor,
  updateSensor,
  getSensorByName,
}
