import React from "react";
import styles from './Game.module.scss';

export default function Game({ game }) {
    return (
        <div className={styles.card}>
            <div className={styles.icons} >

                <svg className={styles.icon} viewBox="0 0 400 400" width="50px" height="50px" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <filter id="shadow">
                        <feDropShadow dx="1" dy="1" stdDeviation="0.5"
                            flood-color="#702632" />
                    </filter>
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path d="M179.981 276.772C164.375 267.266 161.18 262.061 147.634 248.36C66.1022 165.898 137.157 112.457 172.866 125.376C179.595 127.81 187.269 135.311 195.888 147.877C198.083 137.546 204.354 129.251 214.702 122.992C286.701 79.4431 320.679 175.189 251.306 237.353C234.603 252.325 207.881 277.281 196.844 287.597" stroke="#11151c" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> </g>
                </svg>
                <svg className={styles.icon} viewBox="0 0 400 400" width="50px" height="50px" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#11151c"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path d="M303.126 136.208C281.015 132.778 265.08 104.845 246.318 98.0984C244.081 97.2946 232.069 107.635 229.8 109.141C197.375 130.656 162.319 147.633 129.719 168.977C122.439 173.743 85.8024 187.889 83.1465 196.481C82.674 198.014 82.5844 200.212 83.1465 200.322C91.5257 201.965 100.174 208.769 107.257 213.499C111.791 216.526 151.723 247.346 155.006 244.84C189.824 218.255 264.876 166.587 305.77 140.126" stroke="#11151c" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M312.312 160.424C262.454 184.856 195.245 257.231 155.602 278.601C153.826 279.558 139.956 268.042 137.675 266.812C123.434 259.133 110.102 248.85 97.7998 237.996" stroke="#11151c" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M317 184.071C304.217 178.343 169.407 306.551 156.375 300.919C143.344 295.288 116.401 273.745 100.319 261.358" stroke="#11151c" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M188.842 155.443C219.671 118.612 245.085 191.932 193.136 184.294C182.431 182.721 176.52 159.313 184.875 153.304" stroke="#11151c" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M119.806 192.842C125.346 200.295 129.325 195.187 139.627 187.5" stroke="#11151c" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M263.16 144.401C268.505 140.996 264.15 143.816 264.15 137.28" stroke="#11151c" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> </g>
                </svg>
                <svg className={styles.icon} viewBox="0 0 400 400" width="50px" height="50px" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> <path d="M152.428 277.619C169.159 217.284 243.069 88.2505 256.189 92.7865C266.925 96.4983 250.957 144.526 248.712 150.044C230.746 194.172 209.182 234.178 179.538 270.588C167.325 285.585 146.252 293.208 154.297 271.593" stroke="#11151c" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M145.481 292.353C130.711 321.984 149.428 300.227 160.692 288.342" stroke="#11151c" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M257.304 131.582C276.238 146.148 250 189.24 240.238 206.07" stroke="#11151c" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M198.916 191.618C206.312 197.176 211.845 201.158 220.61 210.518" stroke="#11151c" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> </g>
                </svg>
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
                            <th><svg width="25px" height="25px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#1a1e24" d="M36.31,176c0.674,0.386 24.255,13.789 43.69,13.789c19.435,0 43.826,-13.403 44.524,-13.789l9.047,0c14.641,0.044 26.429,11.859 26.429,26.429l0,101.571c0,17.673 -14.327,32 -32,32l0,120c0,13.255 -10.745,24 -24,24l-48,0c-13.255,0 -24,-10.745 -24,-24l0,-120c-17.673,0 -32,-14.327 -32,-32l0,-100.738c0,-15.028 12.16,-27.216 27.262,-27.262l9.048,0Zm176,0c0.674,0.386 24.256,13.789 43.69,13.789c19.434,0 43.826,-13.403 44.524,-13.789l9.047,0c14.641,0.044 26.429,11.859 26.429,26.429l0,101.571c0,17.673 -14.327,32 -32,32l0,120c0,13.255 -10.745,24 -24,24l-48,0c-13.255,0 -24,-10.745 -24,-24l0,-120c-17.673,0 -32,-14.327 -32,-32l0,-100.738c0,-15.028 12.16,-27.216 27.262,-27.262l9.048,0Zm243.69,304l-48,0c-13.255,0 -24,-10.745 -24,-24l0,-120c-17.673,0 -32,-14.327 -32,-32l0,-100.738c0,-15.056 12.206,-27.262 27.262,-27.262l9.048,0c0,0 23.978,13.789 43.69,13.789c19.712,0 44.524,-13.789 44.524,-13.789l9.047,0c14.597,0 26.429,11.832 26.429,26.429l0,101.571c0,17.673 -14.327,32 -32,32l0,120c0,13.222 -10.691,23.946 -24,24Zm-376,-320c35.346,0 64,-28.654 64,-64c0,-35.346 -28.654,-64 -64,-64c-35.346,0 -64,28.654 -64,64c0,35.346 28.654,64 64,64Zm176,0c35.346,0 64,-28.654 64,-64c0,-35.346 -28.654,-64 -64,-64c-35.346,0 -64,28.654 -64,64c0,35.346 28.654,64 64,64Zm240,-64c0,35.346 -28.654,64 -64,64c-35.346,0 -64,-28.654 -64,-64c0,-35.346 28.654,-64 64,-64c35.346,0 64,28.654 64,64Z"></path></svg>
                            </th>
                            <th><svg width="25px" height="25px" viewBox="0 0 32 32" id="Lager_44" data-name="Lager 44" xmlns="http://www.w3.org/2000/svg">
                                <g id="Group_15" data-name="Group 15">
                                    <path id="Path_51" data-name="Path 51" d="M16,0A16,16,0,1,0,32,16,16,16,0,0,0,16,0Zm0,28A12,12,0,1,1,28,16,12.013,12.013,0,0,1,16,28Z" fill="#1a1e24" />
                                    <path id="Path_52" data-name="Path 52" d="M20.02,16H17a1,1,0,0,1-1-1V11.98A1.979,1.979,0,0,0,14.02,10h-.04A1.979,1.979,0,0,0,12,11.98v6.04A1.979,1.979,0,0,0,13.98,20h6.04A1.979,1.979,0,0,0,22,18.02v-.04A1.979,1.979,0,0,0,20.02,16Z" fill="#1a1e24" />
                                </g>
                            </svg>
                            </th>
                            <th><svg width="25px" height="25px" viewBox="-64 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#1a1e24" d="M120 72c0-39.765 32.235-72 72-72s72 32.235 72 72c0 39.764-32.235 72-72 72s-72-32.236-72-72zm254.627 1.373c-12.496-12.497-32.758-12.497-45.254 0L242.745 160H141.254L54.627 73.373c-12.496-12.497-32.758-12.497-45.254 0-12.497 12.497-12.497 32.758 0 45.255L104 213.254V480c0 17.673 14.327 32 32 32h16c17.673 0 32-14.327 32-32V368h16v112c0 17.673 14.327 32 32 32h16c17.673 0 32-14.327 32-32V213.254l94.627-94.627c12.497-12.497 12.497-32.757 0-45.254z" /></svg>
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


