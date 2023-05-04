import FilmModel from '../../models/Film'

const filmMutations = {
    createFilm: async(parent,args) =>{
        const {title,description,published_at,category,image,rating} = args.filmInput

        const film = new FilmModel({title,description,published_at,category,image,rating})
        await film.save()

        return film
    },
    deleteFilm:async(parent,args) =>{
        const {id} = args

        const film = await FilmModel.findByIdAndDelete(id)

        return film
    }
}

export default filmMutations

