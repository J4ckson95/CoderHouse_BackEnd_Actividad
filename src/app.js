import express from "express"
import userModel from "./models/users.model.js"
import mongoose from "mongoose"
import handlebars from "express-handlebars"
import __dirname from "./utils.js"

const app = express()
app.use(express.json())

app.engine("handlebars", handlebars.engine())
app.set("views", __dirname + `/views`)
app.set("view engine", "handlebars")

app.get("/api/characters", async (req, res) => {
    try {
        let data = await userModel.find()
        console.log(data);
        res.render("index", { data });
    } catch (e) { console.log("GetData", e.message); }
})
app.post("/api/characters", async (req, res) => {
    try {
        const newCharacter = req.body
        const saveCharacter = await userModel.create(newCharacter)
    } catch (e) { console.log("SendData", e.message); }

})
const url = "mongodb+srv://J4ckson:IIQyDhhK1Ax1pSgX@coderhousebackend.jdnxmo1.mongodb.net/"
mongoose.connect(url, { dbName: "clase14" })
    .then(() => {
        console.log("DataBae connected ...");
        app.listen(2020, () => console.log("Running Server <(-_-)>"))
    })
