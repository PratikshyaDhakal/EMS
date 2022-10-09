import * as React from "react"
import { Toaster } from "react-hot-toast"
import { Routes, Route } from "react-router-dom"
import "./App.css"
import { UserContext } from "./context/userContext"
import AuthLayout from "./layouts/AuthLayout"
import Dashboard from "./pages/Dashboard"
import LoginPage from "./pages/Login"
import UserPage from "./pages/User"
import { getAuthUser } from "./services/localstorageService"

function App() {
  const [currentUser, setCurrentUser] = React.useState(null)

  React.useEffect(() => {
    setCurrentUser(getAuthUser())
  }, [])

  return (
    <div>
      <Toaster position="bottom-left" />
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
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
      </UserContext.Provider>
    </div>
  )
}

export default App
