import express from "express";
import "express-async-errors"
import swaggerUi from "swagger-ui-express"
import "dotenv/config"
import "reflect-metadata"

import "../../container"

import { router } from "./routes";

const app = express()

app.use(express.json())
app.use(router)

export { app }