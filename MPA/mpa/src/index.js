import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SideBar from './components/SideBar'
import Dashboard from './pages/Dashboard/index'
import Posts from './pages/Posts'
import Settings from './pages/Settings'
 
ReactDOM.render(
    <React.StrictMode>
        <Router>
          <SideBar />
          <Routes>
              <Route path="/" element={<Dashboard/>} />
              <Route path='/settings' element={<Settings/>} />
              <Route path='/posts' element={<Posts/>} />
          </Routes>
        </Router>
    </React.StrictMode>,
document.getElementById('root')
)