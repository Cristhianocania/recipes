//importamos mongoose
const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const recipesSchema = new Schema({

    titulo:{
        type: String,
        trim: true, 
       

    },
    ingredientes:{
        type: String,
        trim: true, 

    },
    preparacion:{
        type: String,
        trim: true, 
        
        
    },
    imagen:{
        type: String,
        default:"sin imagen"
    },
    fecha_alta:{
        type: Date,
        
       
    },
    fecha_mod:{
        type: Date,
        default:Date.now,
       
    },
});

module.exports= mongoose.model ('Recipes',recipesSchema); 