import express from 'express';
import dotenv from 'dotenv';
const userRoutes = require('./routes/userRoutes');
const cors = require('cors')

dotenv.config();

const PORT = process.env.PORT;
const app = express();
app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
    res.json({
        msg: "Server is fine"
    })
})

app.use(userRoutes)

app.listen(PORT, () => {
    console.log("Server running on port ", PORT)
})