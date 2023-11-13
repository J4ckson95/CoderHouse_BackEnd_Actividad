import mongoose from "mongoose";

const collection = "characters"
const userShema = new mongoose.Schema({
    name: String,
    gender: String,
    abilities: String,
    book: String,
    author: String
})
const userModel = mongoose.model(collection, userShema)
export default userModel