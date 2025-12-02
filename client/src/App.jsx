import HomePage from './Pages/HomePage/HomePage'
import LoginPage from './Pages/LoginPage/LoginPage'
import ProfilePage from './Pages/ProfilePage/ProfilePage'
import { Routes, Route } from 'react-router-dom'
import SignupPage from './Pages/SignupPage/SignupPage'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'

const App = () => {
  return (
    <div>
        <Routes>
            <Route 
              path="/" 
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />

            <Route 
              path="/login" 
              element={
                <LoginPage />
              } 
            />

            <Route 
              path='/signup' 
              element={
                <SignupPage />
              } 
            />

            <Route 
              path="/profile" 
              element={
                <ProfilePage />
              } 
            />
        </Routes>
    </div>
  )
}

export default App
