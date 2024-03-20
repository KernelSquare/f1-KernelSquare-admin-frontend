import { Outlet } from 'react-router-dom'

import Nav from './Nav/Nav'
import { Header } from './ui/Header/Header'

const GlobalLayout = () => {
	return (
		<>
			<Header />
			<Nav />
			<Outlet />
		</>
	)
}

export default GlobalLayout
