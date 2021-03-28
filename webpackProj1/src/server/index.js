const dotenv=require('dotenv')
dotenv.config()
var path=require('path')
const express=require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mockAPIResponse = require('./mockAPI.js')
const axios = require("axios");

const PORT = 8081
const app = express()
app.use(cors())
app.use(bodyParser.json())

app.use(
    bodyParser.urlencoded({
      extended: false,
    })
  );
  app.use(express.static("dist"));
const BASE_API_URL = 'https://api.meaningcloud.com/sentiment-2.1'


app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})
Mykey= process.env.Mykey;

app.get("/check/*", async (req, res) => {
    try {
      
      const siteurl = req.params[0];
    
      const apiResponse = await axios.get(`${ BASE_API_URL}?key=${Mykey}&url=${siteurl}&lang=en`);
    
      const { agreement, subjectivity, confidence, irony ,score_tag} = apiResponse.data;
      res.send({
        agreement,
        subjectivity,
        confidence,
        irony,
        score_tag
      });
     
    } catch (err) {
      console.log(err.message);
      res.status(500).send("error!" + err);
    }
  });
  

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})


app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})

module.exports=app