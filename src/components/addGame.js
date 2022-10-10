import React from "react";
import './addGame.css'

export default function AddGame(){
    return(
        <form className="insert-game">
            <input 
            type="text" 
            placeholder="Game ID" 
            required
            />
            <input 
            type="text" 
            placeholder="Name" 
            required 
            />
            <input 
            type="text" 
            placeholder="Image url" 
            required 
            />
            <input 
            type="text" 
            placeholder="Price" 
            required 
            />
            <input 
            type="text" 
            placeholder="Playtime" 
            required 
            />
            <input 
            type="text" 
            placeholder="Designer" 
            required 
            />
            <input 
            type="text" 
            placeholder="Number of players (ex 2-4)" 
            required 
            />
            <input 
            type="text" 
            placeholder="Ages" 
            required 
            />
            <input 
            type="text" 
            placeholder="Genre" 
            required 
            />
        </form>
    )
}