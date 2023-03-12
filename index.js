import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/users.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', userRoutes);
// getting request
app.get('/', (req, res) => {
    console.log("[TEST]!");
    res.send("This is Homepage.")
})
app.listen(PORT, () => console.log(`Seraver running on port: http://localhost:${PORT}`))