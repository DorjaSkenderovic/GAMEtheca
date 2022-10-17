import React, { useState, useEffect } from "react";
import './addGame.css'
import Game from '../Game'
import { GameModel } from "../../models/GameModel";
import TextInput from "./TextInput";
import { db } from '../../firebase'
import { collection, getDocs } from 'firebase/firestore'
import Multiselect from 'multiselect-react-dropdown';

export default function AddGame() {
    const [categories, setCategories] = useState([])
    const loadCategories = async () => {
        const snapshot = await getDocs(collection(db, "categories"))
        const categoriesArray = []
        snapshot.docs.forEach((doc) => {
            const jsonData = doc.data()

            categoriesArray.push({
                key: jsonData.name
            })
        });
        setCategories(categoriesArray)
    }
    useEffect(() => {
        loadCategories()

    }, [])
    const colourStyles = {
        placeholder: (defaultStyles) => {
            return {
                ...defaultStyles,
                color: '#red',
            }
        }
    }

    const game = new GameModel(1, "https://www.games4you.rs/sites/default/files/naseljenici%20ostrva%20katan.jpg", "Catan", "4000", "2-4", "40", 12)
    
    return (
        <div className="addGame">
            <div className="insert-game">
                <form className="addGameForm">
                    <TextInput label="Image URL" />
                    <TextInput label=" Name" />
                    <TextInput label=" Price (RSD)" />
                    <TextInput label=" Number of players" />
                    <TextInput label=" Playtime (min)" />
                    <TextInput label=" Age+" />
                    <Multiselect
                        displayValue="key"
                        className="select"
                        onKeyPressFn={function noRefCheck() { }}
                        onRemove={function noRefCheck() { }}
                        onSearch={function noRefCheck() { }}
                        onSelect={function noRefCheck() { }}
                        options={categories}
                        placeholder="Categories"
                        style={{
                            hover:{
                                backgroundColor:'#1a1e24'
                            },
                            chips: {
                                background: '#11151c',
                                boxShadow: '0 0 0 3px #9c5c67',

                            },
                            multiselectContainer: {
                                color: '#11151c',

                                
                            },
                            searchBox: {
                                boxShadow: '0 0 0 3px #9c5c67',
                                height: '54px',
                                margin: '5px',
                                borderRadius: '15px',
                                border: 'none',
                                backgroundColor: '#ffff',


                            },

                        }}
                    />
                </form>
            </div>
            <div className="preview">
                <div className="previewCard">
                    <Game game={game} />
                </div>
            </div>
        </div>
    )
}