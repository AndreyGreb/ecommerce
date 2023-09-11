import { useSession } from 'next-auth/react'
import Image from 'next/image'

const Home = () => {

	const { data: session } = useSession()

	if (!session) return null

	return (
		<div className='text-blue-900 flex justify-between'>
			<h2>
				Hello, <b>{session.user?.name}</b>
			</h2>
			<div className='flex bg-gray-300 gap-1 text-black rounded-lg overflow-hidden'>
				<div className='relative w-6 h-6'>
					<Image
						src={session.user?.image || ''}
						alt='user image'
						fill
					/>
				</div>
				<span className='px-2'>{session.user?.name}</span>
			</div>
		</div>
	)
}

export default Home
