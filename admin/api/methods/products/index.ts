import ApiService from 'services/ApiService'

import { GetProductListResponseType } from 'types/axios'

export const getProducts = async () => {
	return await ApiService.request<void, GetProductListResponseType>('/api/products')
}