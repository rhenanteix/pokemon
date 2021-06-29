import React from 'react'
import Progress from '../../Progress/Progress'
import './Status.css'


const Status = ({pokemon}) => {

    return (
        <div className="stats">
            {pokemon.map(poke => (
                <div key={poke.id} className="stats-container">
                    {poke.stats.map((stat, index) => (
                        <div key = {index} className="detail-progress-bar">
                            <div className="stat-name-container">
                                <h5>{stat.stat.name}</h5>
                            </div>
                            <div className="stat-bar-container">
                                <Progress className="stats-progress-bar" bgColor={"#6a1b9a"} completed={stat.base_stat}/>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Status
