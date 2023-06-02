import Game from "./Game";
import styles from "./Game.module.scss";

export default function Layout(props) {
  const games = (props.gamesData ?? []).map((game) => {
    return (
      <Game
        key={game.id}
        game={game}
        userGames={props.userGames}
        handleUserAct={props.handleUserAct}
      />
    );
  });

  return <section className={styles.cards}>{games}</section>;
}
