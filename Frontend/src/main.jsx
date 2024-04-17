import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//redux
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from "./reducers"
import { setToken } from './actions/post_action.js'

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
})

store.dispatch(setToken())

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
