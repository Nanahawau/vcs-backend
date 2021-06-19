/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

// Module that helps load env variables from .env file
dotenv.config();


/**
 * App Variables
 */

const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();


/**
 * App Configuration
 */

//Middleware that helps set http headers
app.use(helmet());

//Middleware used to enable cors
app.use(cors());

app.use(express.json());


/**
 * Server Activation
 */

app.listen(PORT, () => {
 console.log(`Listening on port ${PORT}`);
})