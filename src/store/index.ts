import { configureStore } from '@reduxjs/toolkit'
import movieStatesReducer from '@/features/moviesStatesSlice'

export const store = configureStore({
  reducer: {
    movieStates: movieStatesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch