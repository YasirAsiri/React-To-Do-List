import React from 'react'
import {Link} from 'react-router-dom'


export default function Header() {
    return (
        <header style={heaaderStyle}>
            <h1>TodoList</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}

const heaaderStyle = {
    background: 'black',
    color: 'white',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}