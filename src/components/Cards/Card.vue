<template>
  <div class="col">
    <a-card hoverable style="width: 240px">
      <img
        slot="cover"
        alt="example"
        :src="movie.poster_path"
      />
      <a-card-meta :title="movie.title">
        <template :slot="dateFilter">
          www.instagram.com
        </template>
      </a-card-meta>
    </a-card>
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object
    },
  },
  computed: {
    dateFilter() {
      const option = {};

      option.year = 'numeric';
      // console.log(new Intl.DateTimeFormat('ru-RU', option))

      return new Intl.DateTimeFormat('ru-RU', option).format(new Date(this.movie.release_date));
    }
  }
}
</script>


<style scoped>
  .row .col {
    width: 200px;
  }
</style>