const express = require("express");
const routes = express.Router()

const views = __dirname + "/views/"

const profile = {
  name: "Thiago Gomes",
  avatar: "https://avatars.githubusercontent.com/u/57069875?v=4",
  "monthly-budget": 7500000,
  "days-per-week": 2,
  "hours-per-day": 5,
  "vacation-per-year": 4
}

// req, res
routes.get('/', (req, res) => res.render(views + "index"))
routes.get('/job', (req, res) => res.render(views + "job"))
routes.get('/job/edit', (req, res) => res.render(views + "job-edit"))
routes.get('/profile', (req, res) => res.render(views + "profile", { profile }))

module.exports = routes;