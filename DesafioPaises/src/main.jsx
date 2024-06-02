import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/header/header.jsx'
import HomePage from './components/homePage/homePage.jsx'
import List from './components/list/list.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <main>
      <HomePage/>
      <List/>
    </main>
  </React.StrictMode>,
)
