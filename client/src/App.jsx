import React from 'react'
import HomePage from './Pages/HomePage/HomePage'
import LoginPage from './Pages/LoginPage/LoginPage'
import ProfilePage from './Pages/ProfilePage/ProfilePage'
import { Routes, Route } from 'react-router-dom'
import SignupPage from './Pages/SignupPage/SignupPage'
import ContactPage from './Pages/ContactPage/ContactPage'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
import WebSocketComponent from './Components/WebSocketComponent'

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
              path='/contact' 
              element={
                <ContactPage />
              } 
            />
            <Route 
              path="/profile" 
              element={
                <ProfilePage />
              } 
            />
            <Route 
              path="/web"
              element={
                <WebSocketComponent />
              }
            />
        </Routes>
    </div>
  )
}

export default App
