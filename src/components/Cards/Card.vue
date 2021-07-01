<template>
	<div class="col">
		<a-card hoverable style="width: 240px">
			<img slot="cover" alt="example" :src="movie.poster_path" />
			<a-card-meta :title="movie.title">
				<template :slot="dateFilter">
					www.instagram.com
				</template>
			</a-card-meta>
		</a-card>
	</div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { ProfileTypes } from '../../store/Types/ProfileTypes'

type Props = {
	movie: ProfileTypes
}

type Computed = {
	dateFilter: () => string
}

type Option = {
  year: "numeric" | "2-digit"
}

// <Data, Methods, Computed, Props>
export default Vue.extend<any, any, Computed, Props>({
	name: 'card',
	props: {
		movie: {
			type: Object as PropType<ProfileTypes>,
		},
	},
	computed: {
		dateFilter(): any {
			const option: Option = { year: 'numeric' }

			// option.year = 'numeric'
			// console.log(new Intl.DateTimeFormat('ru-RU', option))

			return new Intl.DateTimeFormat('ru-RU', option).format(new Date(this.movie.release_date))
			// return 'dateTime'
		},
	},
	mounted() {
		console.log(this.movie)
	}
})
</script>

<style scoped>
.row .col {
	width: 200px;
}
</style>
