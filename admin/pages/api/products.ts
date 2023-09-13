import clientPromise from 'lib/mongodb'
import mongooseConnect from 'lib/mongoose'
import { Product } from 'models/Product'
import mongoose from 'mongoose'

export default async function handle(req: Request, res: Response) {
	const { method } = req
	await mongooseConnect()
	mongoose.Promise = clientPromise

	if (method === 'POST') {
		const { title, description, price } = req.body

		const productDoc = await Product.create({
			title, description, price
		})

		res.json(productDoc)
	}
}