import { LoginerState } from "."

export const getToken = function (state:LoginerState):string {
	return state.token
}
