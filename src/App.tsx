import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Blogs from './pages/Blog/Blogs/Blogs';


const App: React.FunctionComponent = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/home' element={<Dashboard />} />
          <Route path='/blogs/:blog-title' element={<Blogs />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
