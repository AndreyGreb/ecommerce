import axios, { AxiosRequestConfig } from 'axios'
import getConfig from 'next/config'

class ApiService {

	static async request<RequestType, ResponseType>(url: string, requestParams?: AxiosRequestConfig<RequestType>) {

		try {
			const { publicRuntimeConfig } = getConfig()

			const apiUrl = publicRuntimeConfig.apiUrl

			const axiosConfig: AxiosRequestConfig<RequestType> = {
				method: 'GET',
				url: url.length > 0 ? `${apiUrl}${url}` : '',
				baseURL: apiUrl,
				...requestParams
			}

			const { data } = await axios<ResponseType>(axiosConfig)

			return data

		} catch (error: any) {
			throw error
		}
	}
}

export default ApiService