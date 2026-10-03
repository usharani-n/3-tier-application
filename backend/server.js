const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
    res.json({
        message: 'Backend is working successfully'
    });
});

app.get('/api/database', (req, res) => {
    res.json({
        message: 'Backend is ready to communicate with RDS'
    });
});

app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});