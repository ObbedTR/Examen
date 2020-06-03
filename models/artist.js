const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let artistSchema = new Schema({
    image:{
        type:String,
        required:[true, '¿Cómo une pintore no va a tener obras? Ponlás']
    },
    artist:{
        type:String,
        required:[true, 'Todos los artistas tienen nombre ¿Porqué este no lo tiene?']
    },
    nacionalidad:{
        type:String,
        required:[true, '¿En qué país nació? No se sabe']
    },
    
    corriente:{
        type:String,
        required:[true, '¿No sabes qué tipo de pinturas realiza? ¡Investiga!']
    },
    who:{
        type: String
    },
    speach:{
        type: String
    }
});
module.exports = mongoose.model('artist', artistSchema)