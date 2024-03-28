import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import { LoginUserData } from '@/entities/interfaces/dto/auth/login.dto'

type UserDataStoreType = {
	userData: LoginUserData | undefined
	// eslint-disable-next-line no-unused-vars
	setUserData: (data: LoginUserData) => void
	clearUserData: () => void
}

const useUserDataStore = create<UserDataStoreType>()(
	persist(
		set => ({
			userData: undefined,
			setUserData: (data: LoginUserData) => set({ userData: data }),
			clearUserData: () => set({ userData: undefined }),
		}),
		{
			name: 'user-data-storage',
			storage: createJSONStorage(() => sessionStorage),
		},
	),
)

export default useUserDataStore
