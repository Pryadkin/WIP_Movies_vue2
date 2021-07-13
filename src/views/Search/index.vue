<template>
	<div class="searchWrapper">
		<a-input-search 
			placeholder="input search text" 
			enter-button 
			class="inputSearch"
			@search="onSearch" 
		/>
		<a-pagination class="pagination" :default-current="6" :total='foundMoviesCount' />
		<Cards class="cardsWrapper" :profileMovies='foundMovies'/>
	</div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import Cards from '../../components/Cards'

export default {
	name: 'search',
	computed: mapGetters(['foundMovies', 'foundMoviesCount']),
	components: {
    Cards
  },
	methods: {
		...mapActions(['getMovies']),
		onSearch(e) {
			const payload = {
				name: e,
				isWith: true,
				page: 1
			}
			console.log(payload)
			this.getMovies(payload)
		}
	},
}
</script>

<style scoped>
	.searchWrapper {
    width: 100%;
    height: 100vh;
    display: block;
		overflow-y: scroll;
	}
	.pagination{
		padding: 10px;
	}
	.inputSearch {
		width: 300px;
		margin: auto;
		padding: 10px;
	}
</style>
