import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AjaxDemo } from './AjaxDemo/ajaxdemo'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AjaxDemo/>
  </StrictMode>,
)
