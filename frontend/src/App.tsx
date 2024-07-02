import { Route, Routes, Navigate, BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Layout from './layout/Layout'
import Register from './components/Register'
import Hero from './components/Hero'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"
          element={
            <Layout>
              <Hero />

              <p>home pages</p>
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
        <Route path='/register' element={
          <Layout>
            <Register />
          </Layout>
        } />
        <Route path="*" element={<Navigate to="/" />}
        />
      </Routes>
    </Router>
  )
}

export default App
