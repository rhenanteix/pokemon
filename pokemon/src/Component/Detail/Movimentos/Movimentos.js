import React from 'react'
import './Movimentos.css'

const Movimentos = ({pokemon}) => {

    return (
        <div className = "moves">
            {pokemon.map(poke => (
                <div key = {poke.id} className="moves-container">
                    {poke.moves.slice(0,10).map(move => (
                        <small key={move.move.name}>{(move.move.name).replace('-', ' ')}</small>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Movimentos
