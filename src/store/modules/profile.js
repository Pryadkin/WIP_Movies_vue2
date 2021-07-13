import jsonMovies from '../../assets/profileMovies.json'

export default {
  actions: {
    getProfileMovies(ctx) {
      ctx.commit('updateProfileMovies', jsonMovies)
    }
  },
  mutations: {
    updateProfileMovies(state, profileMovies) {
      return state.profileMovies = profileMovies
    }
  },
  state: {
    profileMovies: [],
    profileMoviesCount: null
  },
  getters: {
    profileMovies(state) {
      return state.profileMovies
    },
    profileMoviesCount(state) {
      return state.profileMovies.length
    }
  }
}