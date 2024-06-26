import './App.css'

import { ChakraProvider } from '@chakra-ui/react'
import { ThemeProvider } from '@emotion/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'

import router from './app/routes/Routing'
import GlobalStyles, { ChakraGlobalStyles } from './app/styles/global'
import theme from './app/styles/theme'
import { worker } from './entities/mocks/borwser'

const queryClient = new QueryClient()

function App() {
	if (import.meta.env.VITE_API_MOCKING === 'enabled') {
		worker.start()
	}

	return (
		<div>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<QueryClientProvider client={queryClient} />
				<ChakraProvider theme={ChakraGlobalStyles}>
					<RouterProvider router={router} />
				</ChakraProvider>
			</ThemeProvider>
		</div>
	)
}

export default App
