import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import Category from './pages/Category'
import CourseDetails from './pages/CourseDetails'
import NotFound from './pages/NotFound'
import { Navbar } from './components/Navbar'
import './App.css'


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path='/category/:category' element={<Category />}></Route>
        <Route path='/courses/:slug' element={<CourseDetails />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </>
  )
}

export default App
