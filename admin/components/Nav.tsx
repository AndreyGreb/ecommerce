import { useRouter } from 'next/router'
import Link from 'next/link'

import IconSettings from 'assets/icons/IconSettings.svg'
import IconLogo from 'assets/icons/IconLogo.svg'
import IconHome from 'assets/icons/IconHome.svg'
import IconList from 'assets/icons/IconList.svg'
import IconBox from 'assets/icons/IconBox.svg'

const Nav = () => {

	const { pathname } = useRouter()

	const inactiveLink = 'flex gap-1 p-1'
	const activeLink = inactiveLink + ' bg-white text-blue-900 rounded-l-lg'

	return (
		<aside className='text-white p-4 pr-0'>
			<Link
				className='flex gap-1 mb-4 mr-4'
				href='/'
			>
				<IconLogo />
				<span>EcommerceAdmin</span>
			</Link>

			<nav className='flex flex-col gap-2'>

				<Link
					className={pathname === '/' ? activeLink : inactiveLink}
					href='/'
				>
					<IconHome />
					Dashboard
				</Link>

				<Link
					className={pathname.includes('/products') ? activeLink : inactiveLink}
					href='/products'
				>
					<IconBox />
					Products
				</Link>

				<Link
					className={pathname.includes('/orders') ? activeLink : inactiveLink}
					href='/orders'
				>
					<IconList />
					Orders
				</Link>

				<Link
					className={pathname.includes('/settings') ? activeLink : inactiveLink}
					href='/settings'
				>
					<IconSettings />
					Settings
				</Link>
			</nav>
		</aside>
	)
}

export default Nav