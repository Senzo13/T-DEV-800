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

router.get('/sensors/:id/:key', getSensorById)
router.get('/sensors/:key', getSensorAll)
router.post('/sensors/:value/:key', createSensor)
router.put('/sensors/:name/:value/:key', updateSensor)
router.get('/sensors/:name/:key', getSensorByName)
router.delete('/sensors/:id/:key', deleteSensor)
export default router
