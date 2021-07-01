import { createMapper, Getters, Module, Mutations } from 'vuex-smart-module'
import { ProfilePageTypes, ProfileTypes } from '@/store/Types/ProfileTypes'
/* tslint:disable-next-line */
import jsonMovies from '../../profileMovies.json'

console.log(jsonMovies)

class ProfilePageState implements ProfilePageTypes {
	profileMovies: [] // "strictPropertyInitialization": false,
  profileMoviesCount: 0
}

class ProfilePageGetters extends Getters<ProfilePageState> {
  get profileMovies() {
    return this.state.profileMovies
  }
  get profileMoviesCount() {
    return this.state.profileMovies.length
  }
}

export class ProfilePageMutations extends Mutations<ProfilePageState> {
	setProfileMovies(state: any) {
    /* tslint:disable-next-line */
		state.profileMovies = jsonMovies
	}
}

const ProfilePageModule = new Module({
	state: ProfilePageState,
	getters: ProfilePageGetters,
	mutations: ProfilePageMutations,
})

export const MainPageStoreMapper = createMapper(ProfilePageModule)

export default ProfilePageModule