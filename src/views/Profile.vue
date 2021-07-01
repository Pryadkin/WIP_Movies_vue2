<template>
	<div class="profile">
		<Cards
      :profileMovies="profileMovies"
    />
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapMutations } from 'vuex'
import Cards from '../components/Cards/index.vue'

// <Data, Methods, Computed, Props>
export default Vue.extend({
	name: 'profile',
	data() {
		return {
			mode: 'inline',
			theme: 'light',
		}
	},
	components: {
    Cards
  },
	computed: mapGetters(['profileMovies', 'profileMoviesCount']),
	methods: {
		...mapMutations(['setProfileMovies']),
	},
	async mounted() {
    this.setProfileMovies()
  }
})
</script>
