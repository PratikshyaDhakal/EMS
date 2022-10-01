import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import "./App.css"
import Dashboard from "./pages/Dashboard"
import LoginPage from "./pages/Login"

function App() {
  return (
    <Routes>
      <Route exact path="/login" element={<LoginPage />} />
      <Route exact path="/" element={<Dashboard />} />
    </Routes>
  )
}

export default App
