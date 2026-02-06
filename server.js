const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());

app.use('/api/readings', require('./routes/readingRoutes'));
app.use('/api/zones', require('./routes/zonesRoutes'));
app.use('/api/incidents', require('./routes/incidentsRoutes'));

app.listen(port, () => console.log(`Server is running on port ${port}`));
    
