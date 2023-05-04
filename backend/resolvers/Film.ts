import FilmModel from '../models/Film'



const filmQuery = {
    getAllFilms: async() =>{
        const films = await FilmModel.find()

        return films
    },
    findByCategory: async(parent,args)=>{
        const {category} = args

        const filteredFilms = await FilmModel.find({category:category})

        return filteredFilms
    }
}

export default filmQuery