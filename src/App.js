import './App.scss';
import { React, useState, useEffect } from 'react';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CardsLayout from './components/game/CardsLayout';
import Purchased from './components/Purchased';
import Wishlist from './components/Wishlist';
import Profile from "./components/profile/Profile";
import VerifyEmail from './components/profile/VerifyEmail'
import { AuthProvider } from './components/profile/AuthContext'
import { auth } from './firebase'
import { onAuthStateChanged } from 'firebase/auth'
import UserRegistration from './components/profile/UserRegistration';
import AddGame from './components/addGame/AddGame';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null)
  const [timeActive, setTimeActive] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      setIsLoading(false)
    })
  }, [])

  return (
    <Router>
      <Navbar />
      <AuthProvider value={{ currentUser, timeActive, setTimeActive }}>
        {isLoading ? <h1>Loading</h1> :
          <Routes>
            <Route exact path='/' element={<CardsLayout />} />
            <Route path="/wishlist" element={
              currentUser?.emailVerified
                ? <Wishlist />
                : <UserRegistration />
            } />
            <Route path="/purchased" element={
              currentUser?.emailVerified
                ? <Purchased />
                : <UserRegistration />
            } />
            <Route path="/profile" element={
              currentUser?.emailVerified
                ? <Profile />
                : <UserRegistration />
            } />
            {currentUser?.email === "dorjaskenderovic@gmail.com" ?
              <Route path="/addGame" element={<AddGame />} /> : "/"}
            <Route path='/verify-email' element={<VerifyEmail />} />
          </Routes>
        }
      </AuthProvider>
    </Router>
  );
}

export default App;
