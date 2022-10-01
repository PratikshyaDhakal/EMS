import { Routes, Route } from "react-router-dom"
import "./App.css"
import AuthLayout from "./layouts/AuthLayout"
import Dashboard from "./pages/Dashboard"
import LoginPage from "./pages/Login"

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
    </Routes>
  )
}

export default App
