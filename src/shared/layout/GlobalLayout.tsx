import { Outlet } from 'react-router-dom'

import Header from './header/Header'
import SideNav from './side-nav/SideNav'

const GlobalLayout = () => {
	return (
		<>
			<Header />
			<SideNav />
			<Outlet />
		</>
	)
}

export default GlobalLayout
