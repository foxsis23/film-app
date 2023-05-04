import FilmQuery from './Film'
import FilmMutations from './mutations/Film'

const resolvers = {
    Query:{ 
        ...FilmQuery
    },
    Mutation:{
        ...FilmMutations
    }
}

export default resolvers