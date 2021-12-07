import React from 'react'

export const Weather = ({weather}) => {
    return(
        <span className="temp">{weather} °C</span>
    )
}