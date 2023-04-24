require("dotenv").config()

const express = require("express")
const cors = require("cors")
const app = express()
const mongoose = require("mongoose")

app.use(cors())

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on("error", (error) => console.error(error))
db.once("open", () => console.log("Connected to Database"))

app.use(express.json())

const micromomentsRouter = require("./routes/micromoments")
app.use("/micromoments", micromomentsRouter)

app.listen(process.env.PORT || 4000, () => console.log("Server Started"))