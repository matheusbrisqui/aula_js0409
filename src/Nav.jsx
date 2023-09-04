import {} from 'react'
import {NavLink} from 'react-router-dom'

function Nav() {
    return(
        <>
        <NavLink to="Home">Home</NavLink>
        <NavLink to="Exemplo1">Exemplo1</NavLink>
        <NavLink to="Exemplo2">Exemplo2</NavLink> 
        <NavLink to="Exemplo3">Exemplo3</NavLink> 
        <NavLink to="Exemplo4">Exemplo4</NavLink>
        <NavLink to="Exemplo5">Exemplo5</NavLink>
        <NavLink to="Exemplo6">Exemplo6</NavLink> 
        </>
    )
}
export default Nav