const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors()); // এটি ফ্রন্টএন্ডকে ডেটা পাঠাতে অনুমতি দেয়
app.use(express.json());

// MySQL কানেকশন
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "", // XAMPP এ পাসওয়ার্ড সাধারণত খালি থাকে
    database: "facebook_db"
});

// লগইন ডেটা সেভ করার API
app.post('/login', (req, res) => {
    const sql = "INSERT INTO users (email, password) VALUES (?)";
    const values = [req.body.email, req.body.password];
    db.query(sql, [values], (err, data) => {
        if(err) return res.json(err);
        return res.json("Success");
    });
});

app.listen(8081, () => { console.log("Backend server running on port 8081"); });