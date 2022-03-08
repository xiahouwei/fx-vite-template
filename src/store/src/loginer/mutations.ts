import { LoginerState } from "."
import { setLocalStorage } from '../utils'

export function SET_LOGINER (state:LoginerState, loginer: LoginerState):void {
	for (const key in loginer) {
		state[key] = loginer[key]
		setLocalStorage(key, loginer[key])
	}
}