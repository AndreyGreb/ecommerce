import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'

import AuthLayout from 'components/Layouts/AuthLayouts'

import '../styles/globals.css'

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
	return (
		<SessionProvider session={session}>
			<AuthLayout>
				<Component {...pageProps} />
			</AuthLayout>
		</SessionProvider>
	)
}

export default App
