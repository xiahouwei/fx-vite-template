import { getLocalStorage } from '../utils'
export default {
	token: getLocalStorage('token', '')
}
