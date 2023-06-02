import React from "react";
import Game from "./game/Game";
import styles from "./game/Game.module.scss";

const Wishlist = (props) => {
  const likedGames = props.userGames?.liked || [];
  const filteredGamesData = Array.isArray(props.gamesData)
    ? props.gamesData.filter((game) => likedGames.includes(game.id))
    : [];

  return (
    <section className={styles.cards}>
      {filteredGamesData.map((game) => (
        <Game key={game.id} game={game} handleUserAct={props.handleUserAct} userGames={props.userGames}/>
      ))}
    </section>
  );
};
export default Wishlist;
