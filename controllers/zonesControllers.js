// @desc   Zones Controller 
// @route  GET /api/zones
// @access Public
const getZones = (req, res) => {
  res.status(200).json({ message: 'Get all zones' });
};

// @desc   Get Zone by ID
// @route  GET /api/zones/:id
// @access Public
const getZoneById = (req, res) => {
  res.status(200).json({ message: `Get zone ${req.params.id}` });
};

// @desc   Create Zone
// @route  POST /api/zones
// @access Public
const createZone = (req, res) => {
  res.status(201).json({ message: 'Zone created' });
};

module.exports = { getZones, getZoneById, createZone };