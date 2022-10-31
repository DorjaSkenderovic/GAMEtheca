import React, { useState, useEffect } from "react";
import Game from "./Game";
import { db } from '../../firebase'
import { collection, getDocs } from 'firebase/firestore'
import { GameModel } from '../../models/GameModel'
import styles from './Game.module.scss'

export default function Layout() {
  const [gamesData, setGamesData] = useState([])

  useEffect(() => {
    loadGamesData()
  }, [])

  const loadGamesData = async () => {
    const snapshot = await getDocs(collection(db, "gamesData"))
    const gamesArray = []

    snapshot.docs.forEach((doc) => {
      const jsonData = doc.data()
      gamesArray.push(
        new GameModel(
          jsonData.id,
          jsonData.url,
          jsonData["name"],
          jsonData["price"],
          jsonData["num_players"],
          jsonData["playtime"],
          jsonData["min_age"]
        )
      )
      setGamesData(gamesArray)
    });

  }
  const games = gamesData.map((game, key) => {
    return <Game game={game} key={key} />
  })

  return (
    <section className={styles.cards}>
      {games}
    </section>
  )
}