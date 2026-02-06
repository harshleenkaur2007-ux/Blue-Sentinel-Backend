const express = require('express');
const router = express.Router();
const {getReadings,
    getReadingById,
    createReading,
    updateReading, 
    deleteReading}= require('../controllers/readingController');

router.route('/').get(getReadings).post(createReading);
router.route('/:id').get(getReadingById).put(updateReading).delete(deleteReading);

module.exports = router;