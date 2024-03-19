import './App.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'

import router from './app/routes/Routing'
import GlobalStyles from './app/styles/global'

const queryClient = new QueryClient()

function App() {
	return (
		<div>
			<GlobalStyles />
			<QueryClientProvider client={queryClient} />
			<RouterProvider router={router} />
		</div>
	)
}

export default App
