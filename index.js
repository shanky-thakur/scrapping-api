// initializing the required packages

const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const app = express();

// use your own port here

const port = process.env.PORT || 5000;

// put value in url

const url = "https://auth.geeksforgeeks.org/user/thakurdeepd52a/practice";
let states = [];

const fetchData = async() => {
    try{
        let res = await axios.get(url);
        let $ = await cheerio.load(res.data);
        $(

            // put the js path of element here

          "body > div.profile_container > div > div.col.s12.m12.l9.xl10.profile_section_col.right-adjust > div.profile_details_section.activity-container-1.section_card > div > div.col.xl9.l8.m8.s12.basic_details_main_col > div > div.row.score_cards_container > div:nth-child(2) > div > div > span.score_card_value"
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
