import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import Category from './pages/Category'
import CourseDetails from './pages/CourseDetail'
import NotFound from './pages/NotFound'
import './App.css'

function App() {

  return (
    <Routes>
      <Route index element={<HomePage />}></Route>
      <Route path='/Category' element={<Category />}></Route>
      <Route path='/CourseDetails' element={<CourseDetails />}></Route>
      <Route path='/NotFound' element={<NotFound />}></Route>
    </Routes>
  )
}

export default App
