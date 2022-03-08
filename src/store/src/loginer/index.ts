import state from './state'
import * as mutations from './mutations'
import * as getters from './getters'

export interface FxVueStore {
	commit: Function
}

export interface LoginerState {
	[key: string]: string
}

const store = {
	state,
	mutations,
	getters
}
export default store
