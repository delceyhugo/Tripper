// Express
const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user');
const bodyParser = require('body-parser');

const app = express();



// Middleware


// Configuration header
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Connection a la Bdd
mongoose.connect('mongodb+srv://admin:Dembz8NQPQVDJf48@clusterperso.twrrj.mongodb.net/<dbname>?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));







// App
app.use(bodyParser.json());
app.use('/api/user', userRoutes);


app.use('/api/stuff', (req, res, next) => {
    const stuff = 
        {
          _id: '1',
          title: 'Mon premier objet',
          description: 'Les infos de mon premier objet',
          imageUrl: 'https://cdn.pixabay.com/photo/2014/05/03/00/09/landscape-336542_960_720.jpg',
          price: 4900,
          userId: 'qsomihvqios',
        };
    res.status(200).json(stuff);
})
module.exports = app;