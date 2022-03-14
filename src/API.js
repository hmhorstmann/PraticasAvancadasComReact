import React, { useState, useEffect } from "react"
import { ThemeContext, themes } from './Theme'
import Card from './Card'

// API funciona com consumer and provider
function API() {

    const [token, setToken] = useState()

    useEffect(() => {
        setTimeout(() => {
            setToken('b4r34ysdfhf473gf')
        }, 4000)
    }, [setToken])

    return (
        <ThemeContext.Provider value={{...themes.primary, token}}>
            <Card />
        </ThemeContext.Provider>
    )
}

export default API