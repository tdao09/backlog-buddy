import express from "express";
const app = express();

app.get("/api", (req, res) => {
    const gameData = {
        "games": ["Mario Wonder", "Mario RPG", "Luigi's Mansion"]
    } 
    res.json(gameData);
})


app.listen(4000, () => {
    console.log("Server started on port 4000");
})