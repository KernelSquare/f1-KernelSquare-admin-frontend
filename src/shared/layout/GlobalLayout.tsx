import { Outlet } from 'react-router-dom'

import SideNav from './side-nav/SideNav'

const GlobalLayout = () => {
	return (
		<>
			<SideNav /> <Outlet />
		</>
	)
}

export default GlobalLayout
