import {gql} from 'apollo-server'

const typeDefs = gql`
    type Film{
        title:String
        description:String
        rating:String
        published_at:String
        category:String
        image:String
        id:ID
    }

    input FilmInput{
        title:String
        description:String
        rating:String
        published_at:String
        category:String
        image:String
    }

    type Query{
        getAllFilms:[Film]
        findByCategory(category:String):[Film]
        searchByTitle(title:String):[Film]
        searchById(id:String):Film
    }

    type Mutation{
        createFilm(filmInput:FilmInput):Film
        deleteFilm(id:ID!):Film
    }
`

export default typeDefs