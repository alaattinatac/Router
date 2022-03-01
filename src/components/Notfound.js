import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Notfound extends Component {
    render() {
        return (
            <div> <h2> “Error 404! Page Not Found”</h2>
                <ul>
                    <li><Link to="/">Return Home Page</Link> </li>
                </ul>


            </div>
        )
    }
}