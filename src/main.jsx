import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css";
import { registerLicense } from '@syncfusion/ej2-base'

registerLicense("Ngo9BigBOggjHTQxAR8/V1NGaF1cXGJCd0x1RXxbf1xzZF1MYV1bQHVPMyBoS35RdUVrWn5eeHVQRmdfVEd1")


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App  />
  </React.StrictMode>,
)
