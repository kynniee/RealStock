import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slides/counterSlide'
import UserReducer from './slides/UserSlide'


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: UserReducer
},
})