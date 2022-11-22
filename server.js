// Inclure la librairie express

var express = require('express');

// Livrairie morgan

var morgan = require('morgan');

// Stocker l'objet express dans une variavle plus courte

var app = express();

// Gestion des passerelles

app.use(morgan("dev"));


app.get('/user',function(request,response){

    response.json('Utilisateur 1');
});

// Création de l'url de la page d'accueil

app.get('/',function(request,response){

    response.json('Bienvenue sur la page d\'accueil');

});

// app.post()
// app.put()
// app.delete()










// methode listen d'express

app.listen(8888, function(err){
    if(err) throw err;

    console.log('Le serveur est lancé sur le port 8888');
});