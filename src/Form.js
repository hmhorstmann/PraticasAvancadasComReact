import React, { useContext } from 'react'
import { ThemeContext } from './Theme'

function Form() {

    const context = useContext(ThemeContext)

    // nao precisa ser arrowfunction, pois é imutavel, print uma unica vez
    const renderForm = (
        <form>
            <label>Nome:</label>
            <input />
            <label>E-mail:</label>
            <input />
            <label>Idade:</label>
            <input />
            <label>Telefon:</label>
            <input />
        </form>
    )

    const renderNotLogged = (
        <h1>
            É necessário realizar o login!
        </h1>
    )

    return (
        <div>
            {!context.token ? renderNotLogged : renderForm}
        </div>
    )
}

export default Form