// @desc    Reading Controller
// @route   GET /api/readings
// @access  Public
const getReadings = (req, res) => {
    res.status(200).json({message: 'Get Readings'});
}

// @desc    Get Reading by ID
// @route   GET /api/readings/:id
// @access  Public
const getReadingById = (req, res) => {
    res.status(200).json({message: `Get Reading with ID ${req.params.id}`});
}

// @desc    Create Reading
// @route   POST /api/readings
// @access  Public
const createReading = (req, res) => {
    res.status(200).json({message: 'Create Reading'});
} 

// @desc    Update Reading
// @route   PUT /api/readings/:id
// @access  Public
const updateReading = (req, res) => {
    res.status(200).json({message: `Update Reading with ID ${req.params.id}`});
}   

// @desc    Delete Reading
// @route   DELETE /api/readings/:id
// @access  Public
const deleteReading = (req, res) => {
    res.status(200).json({message: `Delete Reading with ID ${req.params.id}`});
}   

module.exports = {
    getReadings,
    getReadingById,
    createReading,
    updateReading,
    deleteReading
};