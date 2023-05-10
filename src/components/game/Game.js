import React from "react";
import styles from './Game.module.scss';
import players from '../../assets/players.svg';
import like from '../../assets/like.svg';
import purchased from '../../assets/purchased.svg';
import edit from '../../assets/edit.svg';
import clock from '../../assets/clock1.svg';
import baby from '../../assets/baby.svg';


export default function Game({ game }) {
    return (
        <div className={styles.card}>
            <div className={styles.icons} >
                <img className={styles.icon} src={like} alt="like" />
                <img className={styles.icon} src={purchased} alt="purchased" />
                <img className={styles.icon} src={edit} alt="edit" />
            </div>
            <img src={`${game.url ? game.url : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Solid_white.svg/2048px-Solid_white.svg.png"}`} className={styles.cardImage} alt="" />
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
    )
}


