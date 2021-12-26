const express = require("express")
const axios = require("axios")
const cheerio = require("cheerio")
const PORT = process.env.PORT || 8080;
const app = express()

app.get('/api/movie', (req, res) => {

    axios.get('https://top10.netflix.com/')
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const allMovies = []

            $('#weekly-lists > div > div.px-3 > div > div > div > table > tbody > tr', html).each((index, element) => {
        	const tableData = $(element).find("td");
        	const tableSpan = $(element).find("span");
        	const list = $(tableData[0]).text();
        	const movie = $(tableData[1]).text();
        	const hoursviewed = $(tableSpan[1]).text();

                allMovies.push({
                    list,
                    'name':movie,
                    hoursviewed
                })
            })
            res.json(allMovies)
        }).catch(err => console.log(err))
})


app.get('/api/othermovie', (req, res) => {

    axios.get('https://top10.netflix.com/films-non-english')
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const allMovies = []

            $('#weekly-lists > div > div.px-3 > div > div > div > table > tbody > tr', html).each((index, element) => {
        	const tableData = $(element).find("td");
        	const tableSpan = $(element).find("span");
        	const list = $(tableData[0]).text();
        	const movie = $(tableData[1]).text();
        	const hoursviewed = $(tableSpan[1]).text();

                allMovies.push({
                    list,
                    'name':movie,
                    hoursviewed
                })
            })
            res.json(allMovies)
        }).catch(err => console.log(err))
})


app.get('/api/tv', (req, res) => {

    axios.get('https://top10.netflix.com/tv')
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const allMovies = []

            $('#weekly-lists > div > div.px-3 > div > div > div > table > tbody > tr', html).each((index, element) => {
        	const tableData = $(element).find("td");
        	const tableSpan = $(element).find("span");
        	const list = $(tableData[0]).text();
        	const movie = $(tableData[1]).text();
        	const hoursviewed = $(tableSpan[1]).text();

                allMovies.push({
                    list,
                    'name':movie,
                    hoursviewed
                })
            })
            res.json(allMovies)
        }).catch(err => console.log(err))
})


app.get('/api/othertv', (req, res) => {

    axios.get('https://top10.netflix.com/tv-non-english')
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const allMovies = []

            $('#weekly-lists > div > div.px-3 > div > div > div > table > tbody > tr', html).each((index, element) => {
        	const tableData = $(element).find("td");
        	const tableSpan = $(element).find("span");
        	const list = $(tableData[0]).text();
        	const movie = $(tableData[1]).text();
        	const hoursviewed = $(tableSpan[1]).text();

                allMovies.push({
                    list,
                    'name':movie,
                    hoursviewed
                })
            })
            res.json(allMovies)
        }).catch(err => console.log(err))
})

app.use(function(req, res){
    res.sendStatus(404);
})

app.listen(PORT, () => console.log(`Listening on ...${PORT}`))