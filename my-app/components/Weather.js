import React from 'react'

export const Weather = ({weather}) => {
    return(
        <h5 className="temp"> The temperature is currently: {weather} </h5>
    )
}