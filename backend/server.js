import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import dotenv from "dotenv"
import nodemailer from "nodemailer"
import pkg from "pg"
const { Pool } = pkg

dotenv.config()

const app = express()

const { PORT, pw } = process.env

app.use(express.json())
app.use(bodyParser.json())
app.use(cors())
app.use(express.static("public"))

const pool = new Pool({
  user: "daryletan",
  host: "localhost",
  database: "certforce",
  password: pw,
  port: 5432,
  max: 5,
  connectionTimeoutMillis: 20000,
  idleTimeoutMillis: 20000,
  allowExitOnIdle: false,
})

function sendEmail({ name, email, subject, message }) {
  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    var mailOptions = {
      name: name,
      from: email,
      to: process.env.SMTP_MAIL,
      subject: subject,
      html: `
      <p>${name}</p>
      <p>${email}</p>
      <p>${subject}</p>
      <p>${message}</p>
      `,
    }

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error)
        return reject({ message: `An error has occurred` })
      }
      return resolve({ message: "Email sent successfully" })
    })
  })
}

app.get("/", (req, res) => {
  sendEmail(req.query)
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message))
})

app.get("/api/categories", (req, res, next) => {
  pool
    .query("SELECT * FROM categories;")
    .then((response) => {
      res.send(response.rows)
    })
    .catch(next)
})

app.get("/api/categories/:id", (req, res, next) => {
  const id = req.params.id
  pool
    .query("SELECT * FROM categories WHERE id = $1;", [id])
    .then((response) => {
      const asset = response.rows[0]
      if (asset) {
        res.send(asset)
      } else {
        res.sendStatus(404)
      }
    })
    .catch(next)
})

app.get("/api/clues", (req, res, next) => {
  pool
    .query("SELECT * FROM clues;")
    .then((response) => {
      res.send(response.rows)
    })
    .catch(next)
})

app.get("/api/clues/:id", (req, res, next) => {
  const id = req.params.id
  pool
    .query("SELECT * FROM clues WHERE id = $1;", [id])
    .then((response) => {
      const asset = response.rows[0]
      if (asset) {
        res.send(asset)
      } else {
        res.sendStatus(404)
      }
    })
    .catch(next)
})

app.use((err, req, res, next) => {
  console.log(err)
  return res
    .set("content-type", "text/plain")
    .status(500)
    .send("Internal Server Error")
})

app.listen(PORT, () => {
  console.log(`listening to ${PORT}`)
})
