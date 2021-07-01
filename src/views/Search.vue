<template>
  <div class="search">
    <div class="foundMoviesCount row z-depth-3">
      {{foundMoviesCount}} results
    </div>

    <form class="form">
      <input type="text" v-model="nameMovie">
      <a
        class="waves-effect waves-light btn"
        v-on:click="getMovies({name: nameMovie, isWith: true, page: '1'})"
      >
        Search
      </a>
    </form>

    <div class="cards_container">
      <Cards
        v-bind:profileMovies="foundMovies"
      />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import {mapGetters, mapActions} from 'vuex'
import Cards from '../components/Cards';

export default Vue.extend({
  name: 'Search',
  data() {
    return {
      nameMovie: ''
    }
  },
  components: {
    Cards
  },
  computed: mapGetters(['foundMovies', 'foundMoviesCount']),
  methods: mapActions(["getMovies"])
  // async mounted() {
  //   this.getMovies(nameMovie, true, '1');
  // }
})
</script>

<style scoped lang="css">
.form {
  display: flex;
  width: 400px;
  margin: auto;
}

.btn {
  width: 150px;
}

.foundMoviesCount {
  font-size: 24px;
  display: flex;
  justify-content: center;
  min-width: 150px;
  width: fit-content;
  padding: 0 20px;
  background-color: grey;
  color: white;
}
</style>
