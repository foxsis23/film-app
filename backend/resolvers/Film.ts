import FilmModel from '../models/Film'
import { ApolloError } from 'apollo-server-errors'



const filmQuery = {
    getAllFilms: async() =>{
        const films = await FilmModel.find()

        return films
    },
    findByCategory: async(parent,args)=>{
        const {category} = args
        
        if(category === ''){
                const filteredFilms = await FilmModel.find()

                return filteredFilms
        }

        const filteredFilms = await FilmModel.find({category:category})

        return filteredFilms

        
    },
    searchByTitle:async(parent,args) =>{
        const {title} = args

        // if(title != null){
        //     const searchedFilms = await FilmModel.find({title:title})
        //     if(searchedFilms.length < 1){
        //         throw new ApolloError('No available films for this request','FIND_NO_FILMS')
        //     }
        //     return searchedFilms
        // }

        const allFilms = await FilmModel.find()

        let result = []

        if(title !== ''){
            allFilms.forEach((film) =>{
                if(film.title.toLowerCase().includes(title.toLowerCase())){
                    result.push(film)
                }
            })
    
            return result
        }
        
        return

    },
    searchById:async(parent,args) =>{
        const {id} = args
        
        const film = await FilmModel.findOne({_id:id})

        return film
    }
}

export default filmQuery