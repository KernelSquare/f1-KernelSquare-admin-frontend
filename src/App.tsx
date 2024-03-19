import './App.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'

import router from './app/routes/Routing'
import GlobalStyles from './app/styles/global'
import { worker } from './entities/mocks/borwser'

const queryClient = new QueryClient()

function App() {
	if (import.meta.env.NODE_ENV === 'development') {
		worker.start()
	}
	return (
		<div>
			<GlobalStyles />
			<QueryClientProvider client={queryClient} />
			<RouterProvider router={router} />
		</div>
	)
}

export default App
