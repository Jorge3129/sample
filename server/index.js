const express = require('express');
const cors = require('cors');
const {initUsers} = require("./utils/user.utils");
const app =express()
const PORT = 4000;

app.use(cors({
    origin: "*"
}))

app.get('/users', (req, res) => {
    res.json(initUsers);
})

app.listen(PORT, () => console.log(`running on port ${PORT}`));

