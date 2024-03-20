import { Outlet } from 'react-router-dom'

import { Header } from './ui/Header/Header'
import { Nav } from './ui/Nav/Nav'

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
