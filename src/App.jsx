import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainMenu from './components/MainMenu'
import Game from './components/Game'

function App() {
  return (
    <div className="space_background">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
