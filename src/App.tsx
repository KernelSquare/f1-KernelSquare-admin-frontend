import './App.css'

import { RouterProvider } from 'react-router-dom'

import router from './app/routes/Routing'
import GlobalStyles from './app/styles/global'

function App() {
	return (
		<div>
			<GlobalStyles />
			<RouterProvider router={router} />
		</div>
	)
}

export default App
