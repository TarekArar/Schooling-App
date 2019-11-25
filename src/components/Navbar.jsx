import React from 'react';
import { Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
            <Link className="navbar-brand" to='/'>ExerciseTracker</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-5">
                    <li className="nav-item">
                        <Link className="nav-link" to='/'>Exercises</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/create'>Create Exercise</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/user'>Create User</Link>
                    </li>
                </ul>

            </div>
        </nav>
    );
}

export default Navbar;
