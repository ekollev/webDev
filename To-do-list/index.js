import express from "express"
import bodyParser from "body-parser"
import { printDate } from './public/js/date.js';


//backend code incoming
const app = express()
const port = 3000;



app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    const date = printDate();
    res.render("index.ejs", {date});  
  });


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
