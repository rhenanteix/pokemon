import React, {useState} from 'react'
import {useLocation, useHistory} from 'react-router-dom'
import Sobre from './Sobre/Sobre'
import Status from './Status/Status'
import Evolucao from './Evolucao/Evolucao'
import Movimentos from './Movimentos/Movimentos'
import Titulo from './Titulo'
import './Detalhes.css'

const Detalhes = () => {
    
    const history = useHistory()
    const location = useLocation()
    const pokemon = location.state.pokemon
    
    const [activeTab, setActiveTab] = useState("about")

    const TABS = {
        "about": <Sobre pokemon={pokemon} />,
        "stats": <Status pokemon={pokemon} />,
        "evolution" : <Evolucao pokemon={pokemon} />,
        "moves": <Movimentos pokemon={pokemon}/>
    }

    const getRand = (types) => Math.floor(Math.random() * types)
    
    return (
        <div className="poke-detail-container">
            <div className="back-btn-container">
                <button onClick = {() => history.goBack()}>Go Back</button>
            </div>
            {pokemon.map(poke => (
                <div key={poke.id} className="poke-detail-card">
                    <div 
                        className="detail-img"
                        style ={{ backgroundColor: location.state.colors[poke.types[getRand(poke.types.length)].type.name]}}>
                        <img src={poke.img} alt="pokemon" draggable={false} />
                    </div>
                    <div className="detail-info">
                        <div className="detail-info-container">
                            <div className="detail-name">
                                <Titulo title={poke.name} />
                                <h1>{poke.name}</h1>
                                <div className="detail-type">
                                    {poke.types.map((type, index) => (
                                        <h4 style={{backgroundColor: location.state.colors[type.type.name]}} key={index}>{type.type.name}</h4>
                                    ))}
                                </div>
                            </div>
                            <div className="detail-nav-container">
                                <nav className="detail-nav">
                                    <ul className="detail-nav-items">
                                        <li className = {`detail-nav-links ${activeTab === "about" ? "active" : null}`}  onClick={() => setActiveTab("about")}>Sobre</li>
                                        <li className = {`detail-nav-links ${activeTab === "stats" ? "active" : null}`} onClick={() => setActiveTab("stats")}>Status</li>
                                        <li className = {`detail-nav-links ${activeTab === "evolution" ? "active" : null}`} onClick={() => setActiveTab("evolution")}>Evoluçao</li>
                                        <li className = {`detail-nav-links ${activeTab === "moves" ? "active" : null}`} onClick={() => setActiveTab("moves")}>Movimentos</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="detail-info-render">
                            {TABS[activeTab]}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Detalhes
