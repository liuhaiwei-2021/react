
import { NavLink } from 'react-router-dom'

import { useSelector } from 'react-redux'

const Navbar = () => {

    const isAuth = useSelector(state => state.auth.isAuthenticated)
    
    return (
            
        <nav className="navbar">
            <div className="container">
                <div className="nav-brand">LOGO</div>           
            <ul className="nav-links">
                <li><NavLink className="nav-link" activeClassName="active-link" exact to='/'>News</NavLink></li>
                {   isAuth
                    ? <li><NavLink className="nav-link" activeClassName="active-link" exact to='/create'>Create</NavLink></li>
                    : <li><NavLink className="nav-link" activeClassName="active-link"exact to='/login'>Login</NavLink></li>
                }          

                </ul>
            </div>    
        </nav>
    )
}

export default Navbar
