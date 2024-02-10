import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainMenu from './MainMenu'
import Game from './Game'
import Leaderboard from './Leaderboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/game" element={<Game />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
