import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import path from 'path';
import route from "./server/routes/router";
import dotenv from 'dotenv';
import connectDB from './server/database/connection';

const app = express();

// dotenv.config({path: 'config.env'});
const PORT = process.env.PORT || 8080;

app.use(morgan('tiny'));

// connectDB();

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
app.use('/img', express.static(path.resolve(__dirname, "assets/img")));
app.use('/js', express.static(path.resolve(__dirname, "assets/js")));

app.use('/', route);

app.listen(PORT, () => console.log(`server is running on http://localhost:${PORT}`));