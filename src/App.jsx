import { Routes, Route, Navigate } from 'react-router-dom'
import Portfolio from './pages/Portfolio'

function App() {
  return (
    <Routes>
      <Route path="/sathya/portfolio" element={<Portfolio />} />
      <Route path="*" element={<Navigate to="/sathya/portfolio" replace />} />
    </Routes>
  )
}

export default App