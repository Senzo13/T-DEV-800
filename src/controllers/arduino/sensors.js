import {
  getSensorByIdService,
  getSensorAllService,
  createSensorService,
  updateSensorService,
} from "../../services/arduino/sensors.js";

/** @function getSensorById - GET A SENSOR BY ID. */
const getSensorById = async (req, res) => {
  const response = res;
  const { id, key } = req.params;
  getSensorByIdService({ id, key, response })
    .then((sensor) => {
      res.status(200).json(sensor);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: error.message });
    });
};

/** @function getSensorAll - GET ALL SENSORS. */
const getSensorAll = async (req, res) => {
  const response = res;
  const key = req.params.key;
  getSensorAllService({ response, key })
    .then((sensors) => {
      res.status(200).json(sensors);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: error.message });
    });
};

/** @function createSensor - CREATE A NEW SENSOR. */
const createSensor = async (req, res) => {
  const response = res;
  const { count, key } = req.params;
  createSensorService({ response, count, key })
    .then((sensor) => {
      res.status(200).json(sensor);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: error.message });
    });
};

/** @function updateSensor - UPDATE A SENSOR. */
const updateSensor = async (req, res) => {
  const response = res;
  const { id, count, key } = req.params;
  updateSensorService({ response, id, count, key })
    .then((sensor) => {
      res.status(200).json(sensor);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: error.message });
    });
};

export { getSensorById, getSensorAll, createSensor, updateSensor };
