import { Outlet } from 'react-router-dom'

import Header from './Header/Header'
import Nav from './Nav/Nav'

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
