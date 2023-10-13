/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css";
import { registerLicense } from '@syncfusion/ej2-base'

registerLicense(process.env.SYNC_SECRET) 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App  />
  </React.StrictMode>,
)
