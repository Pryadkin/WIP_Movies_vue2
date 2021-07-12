import { fetchMovies } from '../../api/fetchMovies'

export default {
  actions: {
    async getMovies(ctx, payload) {
      try {
        console.log(payload)
        const data = await fetchMovies(payload.name, payload.isWith, payload.page);
        ctx.commit('updateFoundMovies', data.results)
        ctx.commit('updateFoundMoviesCount', data.total_results)
      } catch (error) {
        alert(error);
      }
    }
  },
  mutations: {
    updateFoundMovies(state, results) {
      console.log(results)
      return state.foundMovies = results;
    },
    updateFoundMoviesCount(state, count) {
      console.log(count)
      return state.foundMoviesCount = count
    }
  },
  state: {
    foundMovies: [],
    foundMoviesCount: 0
  },
  getters: {
    foundMovies(state) {
      console.log(state.foundMovies)
      return state.foundMovies
    },
    foundMoviesCount(state) {
      return state.foundMoviesCount
    }
  }
}