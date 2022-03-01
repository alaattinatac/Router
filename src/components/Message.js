import React from 'react'
import { useParams } from 'react-router-dom'
export default function Message() {
    let param = useParams();
    return (
        <div><h3>Message</h3>
            <h3>This message coming from ID: {param.id}</h3>
        </div>

    )
}