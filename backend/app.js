import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";

const app = express();
dotenv.config({path: "./config/config.env"})

export default app;