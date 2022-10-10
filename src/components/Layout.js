import React, {useState, useEffect} from "react";
import Game from "./Game";
import {db} from '../firebase'
import {collection, getDocs} from 'firebase/firestore'

export default function Layout () {
  const [gamesData, setGamesData] = useState([])
  
  useEffect(()=>{
    loadGamesData()
  },[])

  const loadGamesData = async () => {
    const snapshot = await getDocs(collection(db, "gamesData"))
    const gamesArray = snapshot.docs.map((doc) => doc.data());
    setGamesData(gamesArray);
  }
  const games = gamesData.map((game, index) => {
    return (
      <Game
          key={index}
          coverImg={game.url}
          name={game.name}
          price={game.price}
          numOfPlayers={game.num_players}
          playtime={game.playtime}
          age={game.min_age}
      />
    )
  })
    return(
        <section className='cards'>
          {games}
        </section>
    )
}