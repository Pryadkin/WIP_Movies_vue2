<template>
	<div class="app">
		<a-menu
      class="mainMenu"
			:default-selected-keys="['1']"
			:default-open-keys="['sub1']"
			:mode="mode"
			:theme="theme"
		>
			<a-menu-item key="1">
				<a-icon type="mail" />
				My movies
			</a-menu-item>
			<a-menu-item key="2">
				<a-icon type="calendar" />
				Search
			</a-menu-item>
		</a-menu>
		<router-view />
	</div>
</template>
<script lang="ts">
export default {
	name: 'home',
	data() {
		return {
			mode: 'inline',
			theme: 'dark',
		}
	},
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
.mainMenu {
	width: 256px;
  height: 100vh;
}

</style>
