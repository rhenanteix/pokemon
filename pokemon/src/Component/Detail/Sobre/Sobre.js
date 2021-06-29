import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './Sobre.css'

const Sobre = ({pokemon}) => {

    const [flavorText, setFlavorText] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const fetchFlavorText = async () => {
            const resposne = await axios.get(pokemon[0].species.url)
            const enText = await resposne.data.flavor_text_entries.filter(text => text.language.name === "en")
            setLoading(false)
            setFlavorText(enText)
        }
        fetchFlavorText()
    },[])

    if(loading){
        return "loading..."
    }
        
    return (
        <div className="about">
             <p>Descrição</p>
            <h5>
                {flavorText.length !== 0 && flavorText[Math.floor(Math.random() * flavorText.length)].flavor_text}
            </h5>

            <div className="about-info-container">
                {pokemon.map(poke => (
                    <div key={poke.id} className="about-info">
                        <div className="info">
                            <h5>Tamanho : </h5>
                            <small>{poke.height * 10} cm</small>
                        </div>
                        <div className="info">
                            <h5>pesso : </h5>
                            <small>{poke.weight / 10} kg</small>
                        </div>    
                        <div className="info">
                            <h5>habilidades : </h5>
                            <div>
                                {poke.abilities.map(ability => (
                                    <small key={ability.ability.name}>{ability.ability.name}, </small>
                                ))}  
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default Sobre
