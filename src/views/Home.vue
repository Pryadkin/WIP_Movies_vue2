<template>
	<div>
		home
	</div>
</template>
<script>
export default {
	name: 'home',
	data() {
		return {
			mode: 'inline',
			theme: 'light',
		}
	},
	methods: {
		changeMode(checked) {
			this.mode = checked ? 'vertical' : 'inline';
		},
		changeTheme(checked) {
			this.theme = checked ? 'dark' : 'light'
		},
	},
}
</script>
