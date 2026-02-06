const express = require('express');
const router = express.Router();
const {getZones,
    getZoneById,
    createZone}= require('../controllers/zonesControllers');

router.route('/').get(getZones).post(createZone);
router.route('/:id').get(getZoneById);

module.exports = router;