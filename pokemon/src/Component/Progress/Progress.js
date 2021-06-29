import React from 'react'
import './Progress.css'

const Progress = ({bgColor, completed}) => {
    return (
        <div className="progress-container">
            <div className = "progress-filler" style ={{width: `${completed}%`, backgroundColor: bgColor}}>
                <small className = "progress-label ">{`${completed}%`}</small>
            </div>
        </div>
    )
}

export default Progress;