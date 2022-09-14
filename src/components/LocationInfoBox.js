import React from 'react'

const LocationInfoBox = ({ info }) => {
    return (
        <div className= "location-info">
            <h1>Event Location info</h1>
            <ul>
        <li>ID: <strong>{ info.id }</strong></li>
        <li>TITLE: <strong>{ info.id }</strong></li>
            </ul>

        </div>
    )
}
export default LocationInfoBox
