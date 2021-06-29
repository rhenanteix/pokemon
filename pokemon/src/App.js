import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Nav, List, Detalhes} from './Component'
import './App.css'

const App = () => {
    return (
        <Router>
            <Nav/>
            <div className="App">
                <Route exact path = '/'>
                    <List />
                </Route>
                <Route exact path = '/pokemon/:id'>
                    <Detalhes/>
                </Route>
            </div>
        </Router>
    )
}

export default App