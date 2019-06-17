import React from 'react'

export default function Header() {
    return (
        <header style={heaaderStyle}>
            <h1>TodoList</h1>
        </header>
    )
}

const heaaderStyle = {
    background: 'black',
    color: 'white',
    textAlign: 'center',
    padding: '10px'
}