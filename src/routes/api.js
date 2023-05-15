import express from 'express'
import {
  getSensorById,
  getSensorByName,
  deleteSensor,
  getSensorAll,
  createSensor,
  updateSensor,
} from '../controllers/arduino/sensors.js'

const router = express.Router()

router.get('/sensors/:id/', getSensorById)
router.get('/sensors/', getSensorAll)
router.post('/sensors/', createSensor)
router.put('/sensors/', updateSensor)
router.get('/sensors/:name/', getSensorByName)
router.delete('/sensors/:id/', deleteSensor)
export default router
