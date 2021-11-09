import { CardWidget } from '../CardWidget/CardWidget'
import './NavBar.css'

export const NavBar = () =>{

    return (
        <div>
            <nav>
                <ul>
                    <li>home</li>
                    <li>beats</li>
                    <li>contacto</li>
                </ul>
            <CardWidget/>
            </nav>
           
        </div>
    )
}