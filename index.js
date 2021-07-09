const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
app.use(express.static('public'))
app.set('view engine', "ejs")
const navData = require("./nav.json")
const galleryData = require("./gallery.json")
const newsData = require("./news.json")

navData.forEach((nav) => app.get(nav.url, (req, res) => {
    res.render(nav.name, { title: nav.name, navData, galleryData, newsData })
}))

app.use((req, res) => {
    res.status(404).render('404', { title: 404 })
})

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))