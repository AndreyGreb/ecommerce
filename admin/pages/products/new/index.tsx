import { useFormik } from 'formik'

const NewProductPage = () => {

	const initialValues = {
		title: '',
		description: '',
		price: ''
	}

	const formik = useFormik({
		initialValues,
		onSubmit: () => {

			console.log('submit');


		},

	})

	return (
		<form >
			<h1>New Product</h1>

			<label>Product name</label>
			{/* <input
				name='title'
				value={formik.values.title}
				onChange={formik.handleChange}
				placeholder='Product name'
				type='text'
			/> */}

			{/* <label>Description</label>
			<textarea
				placeholder='Description'
			>

			</textarea>

			<label>Price in (USD)</label>
			<input
				placeholder='Price'
				type='number'
			/> */}

			<button className='btn-primary'>Save</button>
		</form>
	)
}

export default NewProductPage