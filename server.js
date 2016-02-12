var express = require('express');
var app = express();
var expressHandlebars = require('express-handlebars');
var PORT = process.env.NODE_ENV || 3000;

var lineage = {
    lannister: {
        house: 'House Lannister',
        parents: {
            first_parents: 'Joanna & Tywin',
            second_parents: 'Devan & Dorna'
        },
        child: {
            first_child: 'Cersei',
            second_child: 'Jaime',
            third_child: 'Tyrion',
            fourth_child: 'Lancel'
        }
    },
    targaryen: {
        house: 'House Targaryen',
        parents: 'Aerys II & Rhaella',
        child: {
            first_child: 'Rhaegar',
            second_child: 'Viserys',
            third_child: 'Daenerys'
        }
    },
    stark: {
        house: 'House Stark',
        parents: 'Eddard & Catelyn',
        child: {
            first_child: 'Robb',
            second_child: 'Sansa',
            third_child: 'Arya',
            fourth_child: 'Bran',
            fifth_child: 'Rickon'        
        }
    },
};

app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.get('/', function (req, res) {
    res.render('gameofthrones', lineage.stark);
});

app.listen(PORT, function() {
    console.log("listening on port %s", PORT);
});