import { configureStore } from '@reduxjs/toolkit'
import domainReducer from './domain'
export default configureStore({
  reducer: {
    domain: domainReducer
  }
})
