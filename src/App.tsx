import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Blogs from './pages/Blog/Blogs/Blogs';
import InfiniteScrolling from './playground/uiComponents/InfiniteScrolling';
import Debouncing from './playground/uiComponents/Debouncing';
import ComponentLibrary from './pages/ComponentLibrary';
import PageNotFound from './components/PageNotFound/indisx';
import OTPVerification from './playground/uiComponents/OTPVerification';


const App: React.FunctionComponent = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/home' element={<Dashboard />} />
          
          <Route path='/blogs/:blog-title' element={<Blogs />} />
          <Route path='/components/:componentName' element={<ComponentLibrary />} />
          
          <Route path='/infinite-scrolling' element={<InfiniteScrolling />} />
          <Route path='/debouncing' element={<Debouncing />} />
          <Route path='/otp-verification' element={<OTPVerification />} />

          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
