import React from "react";
import gamesData from '../data/gamesData';
import Game from "./Game";

export default function Layout () {
    const allGames = gamesData.games
    const games = allGames.map(game => {
    return (
        <Game
            key={game.id}
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