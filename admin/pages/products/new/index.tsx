import { useFormik } from 'formik'
import axios from 'axios'

import { CreateProductRequestType } from 'types/axios'

const NewProductPage = () => {

	const initialValues = {
		title: '',
		description: '',
		price: ''
	}

	const formik = useFormik({
		initialValues,
		onSubmit: async ({ title, description, price }) => {

			const data: CreateProductRequestType = { title, description, price }

			await axios.post('api/products', data)
		}

	})

	return (
		<form onSubmit={formik.handleSubmit}>
			<h1>New Product</h1>

			<label>Product name</label>
			<input
				name='title'
				value={formik.values.title}
				onChange={formik.handleChange}
				placeholder='Product name'
				type='text'
			/>

			<label>Description</label>
			<textarea
				name='description'
				value={formik.values.description}
				onChange={formik.handleChange}
				placeholder='Description'
			/>

			<label>Price in (USD)</label>
			<input
				name='price'
				value={formik.values.price}
				onChange={formik.handleChange}
				placeholder='Price'
				type='number'
			/>

			<button
				className='btn-primary'
				type='submit'
			>
				Save
			</button>
		</form>
	)
}

export default NewProductPage