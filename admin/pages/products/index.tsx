import { GetServerSideProps } from 'next'
import Link from 'next/link'

import { getProducts } from 'api/methods/products'

import IconEdit from 'assets/icons/IconEdit.svg'

import { ProductsPageProps } from 'types/pages'

const ProductsPage = ({products}: ProductsPageProps) => {
	return (
        <>
            <Link
                className='bg-blue-900 text-white rounded-md py-1 px-2'
                href='/products/new'
            >
                Add new product
            </Link>

            <table className='basic mt-2'>
                <thead>
                    <tr>
                        <td>Product name</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => (
                            <tr key={product._id}>
                                <td>{product.title}</td>
                                <td>
                                    <Link href={'/products/edit/' + product._id}>
                                        <IconEdit className='w-4 h-4' />
                                        Edit
                                    </Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
	)
}

export const getServerSideProps:GetServerSideProps = async () => {

    try {
        const products = await getProducts()

        return {
            props:{
                products
            }
        }

    } catch (error) {

        console.log('error----->',error);
        
        return {
            notFound: true
        }
    }
}

export default ProductsPage