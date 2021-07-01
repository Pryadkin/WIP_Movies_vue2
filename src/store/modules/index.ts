import { Module } from 'vuex-smart-module'
import Profile from './Profile'

const RootModule = new Module({
	modules: {
		Profile,
	},
})

export default RootModule
