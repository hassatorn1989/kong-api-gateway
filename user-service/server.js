
const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("User Service");
});

const port = 3001;

app.listen(port, () => {
    console.log(`User Service listening on port ${port}`);
});
