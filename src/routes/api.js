import express from "express";
import {
  getSensorById,
  getSensorAll,
  createSensor,
  updateSensor,
} from "../controllers/arduino/sensors.js";

const router = express.Router();

router.get("/sensors/:id/:key", getSensorById);
router.get("/sensors/:key", getSensorAll);
router.post("/sensors/:count/:key", createSensor);
router.put("/sensors/:id/:count/:key", updateSensor);

export default router;
