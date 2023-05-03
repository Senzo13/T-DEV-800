import express from "express";
import {
  getSensorById,
  getSensorByName,
  deleteSensor,
  getSensorAll,
  createSensor,
  updateSensor,
} from "../controllers/arduino/sensors.js";

const router = express.Router();

router.get("/sensorsById/:id/:key", getSensorById);
/** ROUTE ONLY WITH REQ PARAMS */

router.get("/sensorsByName/:key", getSensorByName);
/** ROUTE WITH REQ PARAMS AND REQ BODY */

router.get("/sensors/:key", getSensorAll);
/** ROUTE ONLY WITH REQ PARAMS */

router.post("/sensors/:key", createSensor);
/** ROUTE ONLY WITH REQ PARAMS */

router.put("/sensors/:id/:key", updateSensor);
/** ROUTE WITH REQ PARAMS AND REQ BODY */

router.delete("/sensors/:id/:key", deleteSensor);
/** ROUTE ONLY WITH REQ PARAMS */

export default router;
