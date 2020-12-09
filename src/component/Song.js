import React from 'react'

function Song() {
    return (
        <div className="player">
            <div  className="time-control">
            <p> Start time </p>
            <input type= "range" />
            <p> End Time</p>
            <div></div>
            </div>

            
        </div>
    )
}

export default Song
