require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: 3306
});

app.get('/api/health', (req, res) => {
    res.json({
        message: 'Backend is working successfully'
    });
});

app.get('/api/database', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM users');

        res.json({
            message: 'Successfully connected to RDS',
            users: rows
        });
    } catch (error) {
        console.error('Database connection failed:', error);

        res.status(500).json({
            message: 'Database connection failed'
        });
    }
});

app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});