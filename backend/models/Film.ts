import { Schema,model } from "mongoose";

const schema = new Schema({
    title:{
        type:String,
        default:''
    },
    description:{
        type:String,
        default:''
    },
    rating:{
        type:String,
        default:''
    },
    published_at:{
        type:String,
        default:''
    },
    category:{
        type:String,
        default:''
    },
    image:{
        type:String,
        default:''
    }
})

export default model('Film',schema)