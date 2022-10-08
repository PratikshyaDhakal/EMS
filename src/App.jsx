import * as React from "react"
import { Routes, Route } from "react-router-dom"
import "./App.css"
import AuthLayout from "./layouts/AuthLayout"
import Dashboard from "./pages/Dashboard"
import LoginPage from "./pages/Login"
import UserPage from "./pages/User"

function App() {
  return (
    <Routes>
      <Route exact path="/login" element={<LoginPage />} />
      <Route
        exact
        path="/"
        element={
          <AuthLayout>
            <Dashboard />
          </AuthLayout>
        }
      />
      <Route
        exact
        path="/users"
        element={
          <AuthLayout>
            <UserPage />
          </AuthLayout>
        }
      />
    </Routes>
  )
}

export default App
