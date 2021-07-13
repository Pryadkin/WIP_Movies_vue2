<template>
	<div class='profilePage'>
		<Cards :profileMovies='profileMovies'/>
	</div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import Cards from '../../components/Cards'

export default {
  name: 'profile',
  computed: mapGetters(['profileMovies', 'profileMoviesCount']),
  components: {
    Cards
  },
  methods: mapActions(['getProfileMovies']),
  async mounted() {
    this.getProfileMovies()
  }
}
</script>

<style scoped>
  .profilePage {
    width: 100%;
    height: 100vh;
    display: block;
		overflow-y: scroll;
  }
</style>
