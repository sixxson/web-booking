import { Route, Routes, Navigate, BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Layout from './layout/Layout'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"
          element={
            <Layout>
              <p>
                Home page
              </p>
            </Layout>
          }
        />
        <Route path="/search"
          element={
            <Layout>
              <p>
                Search page
              </p>
            </Layout>
          }
        />
        <Route path="*" element={<Navigate to="/" />}
        />
      </Routes>
    </Router>
  )
}

export default App
