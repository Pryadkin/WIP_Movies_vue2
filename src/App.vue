<template>
	<div class="app">
		<a-menu
      class="mainMenu"
			:default-selected-keys="['1']"
			:default-open-keys="['sub1']"
			:mode="mode"
			:theme="theme"
		>
			<a-menu-item key="1" @click="$router.push({name: 'Profile'})">
				<a-icon type="home" />
				My movies
			</a-menu-item>
			<a-menu-item key="2" @click="$router.push({name: 'Search'})">
				<a-icon type="search" />
				Search
			</a-menu-item>
		</a-menu>
		<router-view />
	</div>
</template>

<script>

export default {
	name: 'home',
	data() {
		return {
			mode: 'inline',
			theme: 'dark',
		}
	},
	// computed: {
	// 	openHomePage() {
	// 		router.push('/')
	// 	}
	// },
	methods: {
		// changeMode(checked) {
		// 	this.mode = checked ? 'vertical' : 'inline'
		// },
		// changeTheme(checked) {
		// 	this.theme = checked ? 'dark' : 'light'
		// },
	},
}
</script>

<style scoped>
.app {
	position: relative;
	display: grid;
	grid-template-columns: 0.25fr 1fr;
}
.mainMenu {
	width: 256px;
  height: 100vh;
}

</style>
