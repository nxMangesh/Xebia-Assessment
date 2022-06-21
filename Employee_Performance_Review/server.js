import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import path from 'path';

const app = express();
const PORT = 8080;

app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
app.use('/img', express.static(path.resolve(__dirname, "assets/img")));
app.use('/js', express.static(path.resolve(__dirname, "assets/js")));

app.get('/', (req,res)=> {
  res.render('index');
});

app.listen(PORT, () => console.log(`server is running on http://localhost:${PORT}`));