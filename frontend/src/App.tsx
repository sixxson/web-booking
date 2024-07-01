import { Route, Routes, Navigate, BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Layout from './layout/Layout'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout></Layout>}></Route>
        <Route path="/search" element={<>Search</>}></Route>
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    </Router>
  )
}

export default App
