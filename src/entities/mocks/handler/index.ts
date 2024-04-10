import { authHandler } from './auth'
import { questionHandler } from './questions'

export const mswHandler = [...questionHandler, ...authHandler]
