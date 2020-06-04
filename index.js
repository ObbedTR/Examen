//Se importa el paquete espress y el hbs
const express =require('express');
const hbs=require('hbs');

//Se crea la app
const app = express();
//Se define la fuente de platillas
app.set('view engine', 'hbs');

//Se generan los Partials
hbs.registerPartial('partial', (__dirname + '/views/partial.hbs', 'utf8'));
hbs.registerPartials(__dirname + '/views/partials/')
//Sitio estático
app.use(express.static(__dirname + '/public'));

//Configuración de rutas
app.get('/',(req, res)=>{
    res.render('index',{
        autor: 'Jaime Obbed Tarango Ramírez 4°E',
        year: new Date().getFullYear(),
        tittle: 'Inicio'
    });
});
app.get('/koi',(req, res)=>{
    res.render('koi',{
        autor: 'Jaime Obbed Tarango Ramírez 4°E',
        year: new Date().getFullYear(),
        tittle: 'Koi Samnsa'
    });
});
app.get('/AM',(req, res)=>{
    res.render('AM',{
        autor: 'Jaime Obbed Tarango Ramírez 4°E',
        year: new Date().getFullYear(),
        tittle: 'AM DeBrincat'
    });
});
app.get('/elly',(req, res)=>{
    res.render('elly',{
        autor: 'Jaime Obbed Tarango Ramírez 4°E',
        year: new Date().getFullYear(),
        tittle: 'Elly Smallwood'
    });
});
app.get('/jaime',(req, res)=>{
    res.render('jaime',{
        autor: 'Jaime Obbed Tarango Ramírez 4°E',
        year: new Date().getFullYear(),
        tittle: 'Jaime Ruíz'
    });
});
app.get('/liam',(req, res)=>{
    res.render('liam',{
        autor: 'Jaime Obbed Tarango Ramírez 4°E',
        year: new Date().getFullYear(),
        tittle: 'La Rouille'
    });
});

//Se incia el servidor web
app.listen(3000, ()=>{
    console.log('Escuchando el puerto 3000')
})