import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            isLoggedIn={isLoggedIn}
            onLogout={handleLogout}
          />
        }
      />

      <Route
        path="/home"
        element={
          <Navigate to="/" replace />
        }
      />

      <Route
        path="/login"
        element={
          isLoggedIn ? (
            <Navigate to="/" replace />
          ) : (
            <Login onLogin={handleLogin} />
          )
        }
      />
    </Routes>
  );
}

export default App;