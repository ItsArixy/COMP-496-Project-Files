import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Components/Home";
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import LoginPop from "./auth/LoginPop";
import BusinessFormPop from "./Components/BusinessFormPop";
import FeaturedBusinesses from "./Components/FeaturedBusiness";
import Team from "./Components/TeamLanding"

import { AuthProvider, useAuth } from "./auth/AuthContext";

function HomePage({ onListBusinessClick, onLoginClick }) {
  return (
    <>
      <Hero onLoginClick={onLoginClick}/>
      <Home onListBusinessClick={onListBusinessClick} />
      <FeaturedBusinesses />
      <Team/>
    </>
  );
}

function AppContent() {
  const { user } = useAuth();

  const [authOpen, setAuthOpen] = useState(false);
  const [businessOpen, setBusinessOpen] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (message) => {
    setToast(message);
    window.setTimeout(() => setToast(null), 3000);
  };

  const handleListBusinessClick = () => {
    if (!user) {
      setAuthOpen(true);
      return;
    }

    setBusinessOpen(true);
  };

  return (
    <BrowserRouter>
      <NavBar onLoginClick={() => setAuthOpen(true)} />

      <Routes>
        <Route
          path="/"
          element={<HomePage onListBusinessClick={handleListBusinessClick} onLoginClick={() => setAuthOpen(true)} />}
        />
      </Routes>

      <LoginPop
        open={authOpen}
        onClose={() => setAuthOpen(false)}
        onSuccess={(message) => {
          setAuthOpen(false);
          showToast(
            typeof message === "string" ? message : "Login successful!"
          );
        }}
      />

      <BusinessFormPop
        open={businessOpen}
        onClose={() => setBusinessOpen(false)}
      />

      {toast && (
        <div className="fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 rounded-lg bg-black/80 px-4 py-2 text-white">
          {toast}
        </div>
      )}

      <Footer />
    </BrowserRouter>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}