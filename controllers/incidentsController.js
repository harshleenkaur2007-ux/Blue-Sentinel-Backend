// @desc   Incidents Controller
// @route  GET /api/incidents
// @access Public
const getIncidents = (req, res) => {
    res.status(200).json({message: 'Get Incidents'});
}

// @desc   Get Incident by ID
// @route  GET /api/incidents/:id
// @access Public
const getIncidentById = (req, res) => {
    res.status(200).json({message: `Get Incident with ID ${req.params.id}`});
}

// @desc   Create Incident      
// @route  POST /api/incidents
// @access Public
const createIncident = (req, res) => {
    res.status(200).json({message: 'Create Incident'});
}

// @desc   Update Incident
// @route  PUT /api/incidents/:id
// @access Public
const updateIncident = (req, res) => {
    res.status(200).json({message: `Update Incident with ID ${req.params.id}`});
}

// @desc   Delete Incident
// @route  DELETE /api/incidents/:id
// @access Public
const deleteIncident = (req, res) => {
    res.status(200).json({message: `Delete Incident with ID ${req.params.id}`});
}   


module.exports = {
    getIncidents,
    getIncidentById,
    createIncident,
    updateIncident,
    deleteIncident
};