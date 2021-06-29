import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Card from './Card/Card'
import './Poke.css'

const Poke = ({ pokemons, gotoNextPage }) => {

    const checkHasMore = () => pokemons.length < 1100

    if(pokemons.length === 1){
        return <Card pokemons={pokemons}/>
    }else {
        return (
            <InfiniteScroll 
                dataLength = {pokemons.length} 
                next= {gotoNextPage} 
                hasMore={checkHasMore()} 
                // ainda testando uma forma de fazer um loading
                // loader={
                // <div className="load-container">
                //     <img className="load-img" src = "https://i.imgur.com/aMz1Qtu.gif" alt="loading" />
                // </div>}
                >
                <Card pokemons={pokemons}/>        
            </InfiniteScroll>
        )
    }
  
}

export default Poke