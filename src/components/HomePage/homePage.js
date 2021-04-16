import React from 'react'

export default function Hero({handleLogout}) {
    return (
        <nav>
            <h2>You're awesome</h2>
            <button onClick={handleLogout}>Logout</button>
        </nav>
    )
}
