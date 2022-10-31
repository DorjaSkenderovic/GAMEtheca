import React, { useState, useEffect } from "react";
import styles from './AddGame.module.scss'
import Game from '../game/Game'
import { GameModel } from "../../models/GameModel";
import TextInput from "./TextInput";
import { db } from '../../firebase'
import { collection, getDocs } from 'firebase/firestore'
import Select from 'react-select'

export default function AddGame() {
    const [categories, setCategories] = useState([])
    const loadCategories = async () => {
        const snapshot = await getDocs(collection(db, "categories"))
        const categoriesArray = []
        snapshot.docs.forEach((doc) => {
            const jsonData = doc.data()

            categoriesArray.push({
                label: jsonData.name,
                value: jsonData.name
            })
        });
        setCategories(categoriesArray)
    }
    useEffect(() => {
        loadCategories()
    }, [])

    const game = new GameModel(1, "https://www.games4you.rs/sites/default/files/naseljenici%20ostrva%20katan.jpg", "Catan", "4000", "2-4", "40", 12)

    const selectStyles = {
        container: (provided, state) => ({
            ...provided,
            width: "80%",
            border: "none",
            borderRadius: "15px",
            margin: "5px",
            height: "54px"
        }),
        placeholder: (provided) => ({
            ...provided,
            color: "#11151c"
        }),
        valueContainer: (provided) => ({
            ...provided,
            height: "54px",
        }),
        control: (provided) => ({
            ...provided,
            borderRadius: "15px",
            boxShadow: "0 0 0 3px #11151c",
        }),
        multiValue: (provided) => ({
            ...provided,
            backgroundColor: "#11151c",
            border: "3px solid #702632",
            color: "white",
            borderRadius: "10px",

        }),
        multiValueLabel: (provided) => ({
            ...provided,
            color: "white",
        }),
        multiValueRemove: (provided) => ({
            marginTop: "3.5px"
        }),

    }


    return (
        <div className={styles.addGame}>
            <form className={styles.insertGame}>
                    <TextInput label="Image URL" />
                    <TextInput label=" Name" />
                    <TextInput label=" Price (RSD)" />
                    <TextInput label=" Number of players" />
                    <TextInput label=" Playtime (min)" />
                    <TextInput label=" Age+" />
            </form>
            <div className={styles.preview}>
                <Select
                    styles={selectStyles}
                    className='react-select-container'
                    classNamePrefix="react-select"
                    closeMenuOnSelect={false}
                    placeholder="Select categories"
                    isMulti
                    options={categories}
                />
                <div className={styles.finish}>
                    <div className={styles.previewCard}>
                        <Game game={game} />
                    </div>
                    <div className={styles.submitBtn}>
                    <button>ADD GAME</button>
                    </div>
                </div>
            </div>
        </div>
    )
}