import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import axios from 'axios'

import { CreateProductRequestType } from 'types/axios'

const NewProductPage = () => {

	const router = useRouter()

	const initialValues = {
		title: '',
		description: '',
		price: ''
	}

	const formik = useFormik({
		initialValues,
		onSubmit: async ({ title, description, price }) => {
			try {
				await axios.post<CreateProductRequestType, void>('/api/products', { title, description, price })
				router.push('/products')
			} catch (error) {
				console.log('error', error);
			}
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