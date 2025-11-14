import React, { lazy, Suspense } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import LoadingScreen from './common/LoadingScreen';
const Blogs = lazy(() => import ('./pages/Blog/Blogs/Blogs'));
const InfiniteScrolling = lazy(() => import ('./playground/uiComponents/InfiniteScrolling'));
const Debouncing = lazy(() =>  import ('./playground/uiComponents/Debouncing'));
const ComponentLibrary = lazy(() =>  import ('./pages/ComponentLibrary'));
const PageNotFound = lazy(() => import ('./components/PageNotFound/indisx'));
const OTPVerification = lazy(() => import ('./playground/uiComponents/OTPVerification'));


const App: React.FunctionComponent = () => {
  return (
    <>
    <Suspense fallback={<LoadingScreen />}>
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
      </Suspense>
    </>
  )
}

export default App;
