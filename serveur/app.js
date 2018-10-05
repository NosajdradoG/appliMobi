const express = require('express')
const app = express();
var path = require('path')

app.use("/dist", express.static(path.join(__dirname, "/../client/dist")))

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname+"/../client/index.html"))
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))