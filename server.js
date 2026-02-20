const express = require('express');
const cors = require('cors');
const db = require('./db');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));


app.post('/student', (req, res) => {
    const { name, department, email } = req.body;

    if (!name || !department || !email) {
        return res.status(400).json({message:"All field required"});
    }

    app.post('/student', (req, res) => {
    const { name, department, email } = req.body;

    const sql = "INSERT INTO student (name,department,email) VALUES (?,?,?)";

    db.query(sql, [name, department, email], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Student added successfully" });
    });
});

    app.get('/student', (req, res) => {
        db.query("SELECT * FROM student ORDER BY id DESC" , (err,  results) => {
            if (err) return res.status(500).json(err);
            res.json(results);
        });
    });




    app.put('/student/:id', (req, res) => {
        const { name, department, email } = req.body;
        const id = req.params;
        const sql = "UPDATE student SET name=?, department=?, email=? WHERE id=?";
        db.query(sql, [name, department, email, id], (err, result) => {
            if (err) return res.status(500).json(err);
            res.json({message:"Student updated successfully"});
        });
    });

    app.delete('/student/:id', function (req, res) {
            const id = req.params;
            db.query("DELETE FROM student WHERE id =?", [id], (err, result) => {
                if (err) return res.status(500).json(err);
                res.json({ message: "student deleted successfully" });
            });
        });
    });

    app.listen(process.env.PORT, () => {
        console.log(`Server is running at http://localhost:${process.env.PORT}`);
    });