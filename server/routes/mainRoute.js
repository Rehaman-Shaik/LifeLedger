import express from 'express';

const mainRouter = express.Router()

mainRouter.get("/", (req, res) => {
    // var users = await getAllUsers()
    res.render("index.ejs")
})

mainRouter.get("/finance", (req, res) => {
    res.json({ "finance": "finance" })
})

mainRouter.get("/movies", (req, res) => {
    res.json({ "movies": "movies" })
})

mainRouter.get("/series", (req, res) => {
    res.json({ "series": "series" })
})

mainRouter.get("/games", (req, res) => {
    res.json({ "games": "games" })
})

mainRouter.get("/login", (req, res)=>{
    res.send("Hi")
})
export default mainRouter;
