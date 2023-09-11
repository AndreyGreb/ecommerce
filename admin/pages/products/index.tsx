import Link from 'next/link'

const ProductsPage = () => {
	return (
		<Link
			className='bg-blue-900 text-white rounded-md py-1 px-2'
			href='/products/new'
		>
			Add new product
		</Link>
	)
}

export default ProductsPage