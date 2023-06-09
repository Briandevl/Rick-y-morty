import SearchBar from "../SearchBar";
import {Link} from "react-router-dom";
import "./navBar.css";
import logoRM from "../../assets/logo rick y morty 2.png"
import { LogoStyle } from "./navBar.styles";

export default function NavBar({ onSearch, random }) {
    return (
        <div className="nav-container">
            <div>
                <Link to="/about">About</Link>
                <Link to="/home">Home</Link>
            </div>
             <SearchBar onSearch={onSearch} /> 

             <img width="200" src={logoRM} alt="logo" />
            <button className="random" onClick={random}>
                ADD RANDOM
            </button>
        </div>
    )
};