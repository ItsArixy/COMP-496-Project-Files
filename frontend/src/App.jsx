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
  const [toast, setToast] = useState(null);

  const showToast = (message) => {
    setToast(message);
    window.setTimeout(() => setToast(null), 3000); // Clear toast after 3 seconds
  };
  return (
      <AuthProvider>
        <BrowserRouter>
          <NavBar onLoginClick={() => setAuthOpen(true)} />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
          <LoginPop 
            open={authOpen} 
            onClose={() => setAuthOpen(false)} 
            onSuccess={(message) => {
              setAuthOpen(false);
              showToast(typeof message === 'string' ? message : "Login successful!");
            }}
          />
          {toast && (
            <div className="fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 rounded-lg bg-black/80 px-4 py-2 text-white">
              {toast}
            </div>
          )}
        </BrowserRouter>
      </AuthProvider>
    )
}