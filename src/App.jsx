import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import MainMenu from './pages/MainMenu'
import Book from './pages/Book'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<MainMenu />} />
          <Route path='/libro' element={<Book />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
