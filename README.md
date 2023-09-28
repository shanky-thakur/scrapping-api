# scrapping-api
scraping api to scrape any data present on a website available globally

all you need is node.js installed which you can do from here : `https://nodejs.org/en/download`

then in order to proceed just install cheerio and express along with axios,
with the following command in the command line : `$ npm i axios cheerio express` 

just hold a website and put the js path of the element you want to scrape and you are good to go

// initializing the required packages

const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const app = express();

// use your own port here

const port = process.env.PORT || 5000;

// put value in url

const url = ""; // your url here
let states = [];

const fetchData = async() => {
    try{
        let res = await axios.get(url);
        let $ = await cheerio.load(res.data);
        $(

            // put the js path of element here

          "" // js path here
          
        ).each((i, e) => {
          states.push($(e).text().trim());
        });
    }
    
    catch(e){
        console.log(e);
    }
};

// calling the api

fetchData();

// required routing

app.get('/',(req,res) => {
    res.send(states);
});

// corresponding status 200

app.listen(port,() => console.log("server running"));

the data recieved is in json format text however you can manipulate this to form objects, and can also scrape the media recieved as the resresponse.
