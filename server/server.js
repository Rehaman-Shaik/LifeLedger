import cors from "cors"
import bodyParser from "body-parser";
import express from "express";
import getAllUsers from "./models/users.js";
import financeRouter from "./routes/finance.js";

const app = express();
const port = 3000;

//routes
app.use("/", financeRouter)


app.use(cors());
app.use(bodyParser.json());
// app.use("/main", router)


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})

app.get("/", async (req, res) => {
    var users = await getAllUsers()
    res.json({ "users": users })
})

app.get("/movies", async (req, res) => {
    res.json({ "movies": "movies" })
})

app.get("/series", async (req, res) => {
    res.json({ "series": "series" })
})

app.get("/games", async (req, res) => {
    res.json({ "games": "games" })
})


export { app } 