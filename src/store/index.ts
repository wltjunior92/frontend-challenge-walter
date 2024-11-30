import { configureStore } from '@reduxjs/toolkit'

import applicationReducer from './reducers/applicationReducer'
import restaurantMenuReducer from './reducers/menuReducer'
import restaurantReducer from './reducers/restaurantReducer'

export const store = configureStore({
  reducer: {
    restaurantData: restaurantReducer,
    menu: restaurantMenuReducer,
    application: applicationReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
