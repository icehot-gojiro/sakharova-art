import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

export default function App() {
  return (
    <div className='min-h-screen flex flex-col'>
      <nav className='p-6 flex gap-6 text-lg'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </nav>
      <div className='flex-1'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </div>
  )
}
