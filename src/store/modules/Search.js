// import { fetchMovies } from '../../api/fetchMovies'

// export default {
//   actions: {
//     async getMovies(ctx, payload) {
//       try {
//         const data = await fetchMovies(payload.name, payload.isWith, payload.page);

//         ctx.commit('updateFoundMovies', data)
//       } catch (error) {
//         alert(error);
//       }
//     }
//   },
//   mutations: {
//     updateFoundMovies(state, data) {
//       state.foundMovies = data.results;
//       state.foundMoviesCount = data.total_results
//     }
//   },
//   state: {
//     foundMovies: [],
//     foundMoviesCount: 0
//   },
//   getters: {
//     foundMovies(state) {
//       return state.foundMovies
//     },
//     foundMoviesCount(state) {
//       return state.foundMoviesCount
//     }
//   }
// }