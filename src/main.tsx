import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import { RouterProvider } from "react-router-dom"
import './index.css'
import { element } from './routes/HomeRoutes.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={element}/>
    {/* <App /> */}
  </React.StrictMode>,
)
