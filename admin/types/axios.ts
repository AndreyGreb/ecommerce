
export interface CreateProductRequestType {
	title: string
	description: string
	price: string
}

export type GetProductListResponseType = Array<{
    _id: string
    title: string
	description: string
	price: string
}>