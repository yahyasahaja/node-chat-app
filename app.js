const path = require('path');
const publicPath = path.join(__dirname + './public');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('./public'));

app.get('/woi', (req, res) => {
    res.send('woi');
})

app.listen(port, () => console.log(`server running at port ${port}`));