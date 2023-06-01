import "./App.scss";
import { React, useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardsLayout from "./components/game/CardsLayout";
import Purchased from "./components/Purchased";
import Wishlist from "./components/Wishlist";
import Profile from "./components/profile/Profile";
import VerifyEmail from "./components/profile/VerifyEmail";
import { AuthProvider } from "./components/profile/AuthContext";
import { auth, db } from "./firebase";
import { collection, query, getDocs, getDoc, doc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import UserRegistration from "./components/profile/UserRegistration";
import AddGame from "./components/addGame/AddGame";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const [timeActive, setTimeActive] = useState(false);
  const [gamesData, setGamesData] = useState([]);
  const [userGames, setUserGames] = useState([]);

  useEffect(() => {
    loadGamesData();

    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setIsLoading(false);
      if (user) {
        loadUserGames();
      } else {
        setUserGames([]);
      }
    });
  }, [userGames]);

  const loadUserGames = async () => {
    const docRef = doc(db, "users", auth.currentUser?.uid);

    const userGames = (await getDoc(docRef)).data();
    setUserGames(userGames);
  };

  const loadGamesData = async () => {
    const snapshot = await getDocs(query(collection(db, "gamesData")));
    const gamesArray = [];

    snapshot.docs.forEach((doc) => {
      gamesArray.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    setGamesData(gamesArray);
  };

  return (
    <Router>
      <Navbar />
      <AuthProvider value={{ currentUser, timeActive, setTimeActive }}>
        {isLoading ? (
          <h1>Loading</h1>
        ) : (
          <Routes>
            <Route
              exact
              path="/"
              element={
                <CardsLayout gamesData={gamesData} userGames={userGames} />
              }
            />
            <Route
              path="/wishlist"
              element={
                currentUser?.emailVerified ? (
                  <Wishlist gamesData={gamesData} userGames={userGames} />
                ) : (
                  <UserRegistration />
                )
              }
            />
            <Route
              path="/purchased"
              element={
                currentUser?.emailVerified ? (
                  <Purchased />
                ) : (
                  <UserRegistration />
                )
              }
            />
            <Route
              path="/profile"
              element={
                currentUser?.emailVerified ? <Profile /> : <UserRegistration />
              }
            />
            {currentUser?.email === "dorjaskenderovic@gmail.com" ? (
              <Route path="/addGame" element={<AddGame />} />
            ) : (
              "/"
            )}
            <Route path="/verify-email" element={<VerifyEmail />} />
          </Routes>
        )}
      </AuthProvider>
    </Router>
  );
}

export default App;
