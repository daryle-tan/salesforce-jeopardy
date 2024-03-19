import path from "path"
import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
dotenv.config()
import connectDB from "./config/db.js"

const port = process.env.PORT || 5002

connectDB()

const app = express()

app.use(express.json())
app.use(cookieParser())
