<template>
  <div>
    <div class="cards_container">
      <div 
        v-for="movie in getMovies" 
        :key="movie.id"
        class="row"
      >
        <Card :movie="movie"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import Card from './Card.vue'
import { ProfileTypes } from '../../store/Types/ProfileTypes'

export default Vue.extend({
  props: {
    profileMovies: Array
  },
  data() {
    return {
      movies: Array as PropType<ProfileTypes[]>
    }
  },
  components: {
    Card
  },
  computed: {
    getMovies() {
      // console.log(this.profileMovies)
      return this.profileMovies
    }
  }
})
</script>

<style scoped>
.cards_container {
  display: flex;
  flex-wrap: wrap;
}
</style>
