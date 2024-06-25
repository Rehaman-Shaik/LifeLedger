import cors from "cors"
import bodyParser from "body-parser";
import express from "express";
import financeRouter from "./routes/financeRoute.js";
import mainRouter from "./routes/mainRoute.js";

const app = express();
const port = 3000;

app.use(express.static("public"))
app.use(cors());
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})

//routes
app.use("/", financeRouter)
app.use("/", mainRouter)