const express = require('express');
const {CityController, AirportController, FlgihtController} = require('../../controllers/index');

const router = express.Router();

router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id',CityController.get);
router.get('/city',CityController.getAll);
router.patch('/city/:id',CityController.update);
router.post('/city/:id',CityController.getAirports);

router.post('/airport', AirportController.create);
router.delete('/airport/:id', AirportController.destroy);
router.get('/airport/:id',AirportController.get);
router.patch('/airport/:id',AirportController.update);

router.post('/flights',FlgihtController.create);
router.get('/flights',FlgihtController.getAll);

module.exports = router;