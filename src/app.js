const express = require('express')
const path = require('path')
const hbs = require('hbs')

const youtubeURL = 'AIzaSyArAtUDVHCAoNonbuFnaxXA6A6ONY9VYEk';

// Create a Express objet
const app = express()
const port = process.env.PORT || 3000

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Setup heandlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Setup static directory to serve
app.use(express.static(publicDirectoryPath))


// Express midleware
app.get('', (req, res) => {
  res.render('index', {
    title: 'Todos los productos',
    descripcion: 'Busque, pruebe o adquiera productos y servicios',
    opciones: ['Pruebas gratuitas',
      'Ofertas actuales',
      'Tecnologías']
  })
})

app.get('/about', (req, res) => {
  res.render('about.html', {
    title: 'website_about'
  })
})

app.get('*', (req, res) => {
  res.send('404 Page not found')
})

//Express server lisener
app.listen(port, () => {
  console.log('Server is up on port ${port}.')
  console.log(viewsPath)
})