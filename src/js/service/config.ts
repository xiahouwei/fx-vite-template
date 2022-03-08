export interface AxiosCreateConfig {
	timeout: number,
	withCredentials: boolean

}

export const requestConfig = {
	timeout: 60000,
	withCredentials: true
}
export const requestFileConfig = {
	headers: {
		post: {
			'Content-Type': 'multipart/form-data'
		}
	},
	timeout: 60000,
	withCredentials: true
}
