import React from "react";
import styles from "./Game.module.scss";
import players from "../../assets/players.svg";
import clock from "../../assets/clock1.svg";
import baby from "../../assets/baby.svg";
import Like from "./Like";
import Edit from "./Edit";
import Bought from "./Bought";

export default function Game({ game }) {
  return (
    <div className={styles.card}>
      <div className={styles.icons}>
        <Like className={styles.icon} />
        <Edit className={styles.icon} />
        <Bought className={styles.icon} />
      </div>
      <img
        src={`${
          game.url
            ? game.url
            : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Solid_white.svg/2048px-Solid_white.svg.png"
        }`}
        className={styles.cardImage}
        alt=""
      />
      <div className={styles.cardOverlay}>
        <div className={styles.cardHeader}>
          <h1 className={styles.cardTitle}>{game.name}</h1>
          <p className={styles.pricetag}>{game.price} RSD</p>
        </div>
        <table className={styles.info}>
          <tbody>
            <tr>
              <th>
                <img src={players} alt="Number of players" />
              </th>
              <th>
                <img src={clock} alt="Time" />
              </th>
              <th>
                <img src={baby} alt="Age" />
              </th>
            </tr>

            <tr>
              <td>{game.num_players}</td>
              <td>{game.playtime} min</td>
              <td>{game.min_age}+</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
