import React, { useState } from "react";
import styles from './AddGame.module.scss'
import Game from '../game/Game'
import { CForm, CFormInput, CFormLabel, CFormFloating } from '@coreui/react'
import { db } from '../../firebase'
import { addDoc, collection } from "firebase/firestore";

export default function AddGame() {
    const [gameModel, setGameModel] = useState({
        url: '',
        name: '',
        price: '',
        num_players: '',
        playtime: '',
        min_age: '',
    });

    const handleChange = (event) => {
        setGameModel({
            ...gameModel,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addDoc(collection(db, "gamesData"), {
            ...gameModel
        });
        console.log(gameModel)

    }


    return (
        <CForm className={styles.addGame} onSubmit={handleSubmit}>
            <div className={styles.insertGame}>
                <CFormFloating className={styles.floatingInput}>
                    <CFormInput placeholder="Image URL"
                        name="url"
                        value={gameModel.url}
                        onChange={handleChange}
                        required
                        className={styles.inputField} />
                    <CFormLabel >Image URL:</CFormLabel>
                </CFormFloating>
                <CFormFloating className={styles.floatingInput}>
                    <CFormInput placeholder="Name"
                        name="name"
                        value={gameModel.name}
                        onChange={handleChange}
                        required
                        className={styles.inputField} />
                    <CFormLabel >Name:</CFormLabel>
                </CFormFloating>
                <CFormFloating className={styles.floatingInput}>
                    <CFormInput placeholder="Price"
                        name="price"
                        value={gameModel.price}
                        onChange={handleChange}
                        required
                        className={styles.inputField} />
                    <CFormLabel >Price:</CFormLabel>
                </CFormFloating>
                <CFormFloating className={styles.floatingInput}>
                    <CFormInput placeholder="Number of players"
                        name="num_players"
                        value={gameModel.num_players}
                        onChange={handleChange}
                        required
                        className={styles.inputField} />
                    <CFormLabel >Number of players:</CFormLabel>
                </CFormFloating>
                <CFormFloating className={styles.floatingInput}>
                    <CFormInput placeholder="Playtime"
                        name="playtime"
                        value={gameModel.playtime}
                        onChange={handleChange}
                        required
                        className={styles.inputField} />
                    <CFormLabel >Playtime (min):</CFormLabel>
                </CFormFloating>
                <CFormFloating className={styles.floatingInput}>
                    <CFormInput placeholder="Age"
                        name="min_age"
                        value={gameModel.min_age}
                        onChange={handleChange}
                        required
                        className={styles.inputField} />
                    <CFormLabel>Age+:</CFormLabel>
                </CFormFloating>
            </div>
            <div className={styles.preview}>
                <div className={styles.card}>
                    <Game game={gameModel} />
                </div>
                <div className={styles.submitBtn}>
                    <button type="submit">ADD GAME</button>
                </div>
            </div>
        </CForm>
    )
}