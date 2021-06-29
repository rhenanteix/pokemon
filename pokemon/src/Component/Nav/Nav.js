import React from 'react'
import { Link } from 'react-router-dom'
import { SiPokemon as PokemonIconAlt} from 'react-icons/si'
import './Nav.css'

function Nav() {
    return (
        <nav className = "navbar">
            <div className = "navbar-container container">
                <Link to = '/' className = "navbar-logo">
                    <PokemonIconAlt className = "navbar-icon" size="150px"/>
                </Link>
            </div>
        </nav>
    )
}

export default Nav