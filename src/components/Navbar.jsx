import React from 'react';
import { Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
            <Link className="navbar-brand" to='/'>Schooling</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-5">
                    <li className="nav-item">
                        <Link className="nav-link" to='/'>Etudiants</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/create'>Creer Etudiant</Link>
                    </li>
                </ul>

            </div>
        </nav>
    );
}

export default Navbar;
