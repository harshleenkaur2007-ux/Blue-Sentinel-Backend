const express = require('express');
const router = express.Router();
const {getIncidents,
    getIncidentById,
    createIncident,
    updateIncident, 
    deleteIncident}= require('../controllers/incidentsController');

router.route('/').get(getIncidents).post(createIncident);
router.route('/:id').get(getIncidentById).put(updateIncident).delete(deleteIncident);

module.exports = router;