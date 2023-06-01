import React, { useEffect } from "react";
import styles from "./Game.module.scss";
import players from "../../assets/players.svg";
import clock from "../../assets/clock1.svg";
import baby from "../../assets/baby.svg";
import Like from "./LikeIcon";
import Edit from "./EditIcon";
import Bought from "./BoughtIcon";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { useState } from "react";

export default function Game({ game, userGames }) {
  const registeredUser = auth.currentUser?.emailVerified;
  const [isLiked, setIsLiked] = useState(false);
  //const [isPurchased, setIsPurchased] = useState(false);
  const defaultColor = "#9c5c67";
  const strokeColor = "#11151c";
  const strokeActive = "#702632";

  useEffect(() => {
    const likedGames = userGames?.liked || [];
    setIsLiked(likedGames.includes(game.id));
  }, [game.id, userGames]);
  console.log(userGames?.liked)

  const handleLike = () => {
    if (isLiked === false) {
      updateDoc(
        doc(db, "users", auth.currentUser?.uid),
        {
          liked: arrayUnion(game.id),
        },
        { merge: true }
      );
      setIsLiked(true);
    } else {
      updateDoc(
        doc(db, "users", auth.currentUser?.uid),
        {
          liked: arrayRemove(game.id),
        },
        { merge: true }
      );
      setIsLiked(false);
    }
  };

  return (
    <div className={styles.card}>
      {registeredUser ? (
        <div className={styles.icons}>
          <Like
            className={styles.icon}
            onClick={handleLike}
            color={defaultColor}
            strokeColor={isLiked ? strokeActive : strokeColor}
          />
          <Edit className={styles.icon} />
          <Bought className={styles.icon} />
        </div>
      ) : (
        ""
      )}
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
