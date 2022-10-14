import React from "react";
import './addGame.css'
import Game from '../Game'
import { GameModel } from "../../models/GameModel";
import TextInput from "./TextInput";
export default function AddGame() {

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
                    <TextInput label="Categories" />
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