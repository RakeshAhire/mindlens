const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require("cors");

const { formRouter } = require('./routes/form.route');
const { submissionRouter } = require('./routes/submisson.route');
const { connection } = require('./config/db');

const app = express();
const PORT = 8080;

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors())

// Routes
app.get("/", (req, res) => {
    try {
        res.send("Server is Running...!")
    } catch (error) {
        console.log('error: ', error);
    }
})

app.use('/forms', formRouter);
app.use('/submissions', submissionRouter);

app.listen(PORT, () => {
    connection;
    console.log(`Server is running on port ${PORT}`);
});
