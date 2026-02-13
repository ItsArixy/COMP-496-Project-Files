import { BrowserRouter, Routes, Route } from "react-router-dom"
import {useState} from 'react';
import Home from "./Components/Home"
import NavBar from "./Components/NavBar"
import LoginPop from "./auth/LoginPop"
import { AuthProvider as Auth, AuthProvider } from "./auth/AuthContext"


function HomePage() {
  return (
    <>
      <Home />
    </>
  )
}

export default function App() {
  const [authOpen, setAuthOpen] = useState(false);
  return (
      <AuthProvider>
        <BrowserRouter>
          <NavBar onLoginClick={() => setAuthOpen(true)} />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
          <LoginPop open={authOpen} onClose={() => setAuthOpen(false)} onSuccess={() => setAuthOpen(false)} />
        </BrowserRouter>
      </AuthProvider>
    )
}