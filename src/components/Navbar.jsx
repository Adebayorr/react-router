import { NavLink } from "react-router";
import './Navbar.css'

export function Navbar() {

    return (
        <div>
        
            <nav>
                <NavLink className="Logo" to="/"><h2 aria-label="Logo">CourseCorrect</h2></NavLink>
                <NavLink className={({isActive}) => isActive ? "active" : ""} to="/category/Beginner">Beginner</NavLink>
                <NavLink className={({isActive}) => isActive ? "active" : ""} to="/category/Intermediate">Intermediate</NavLink>
            </nav>
        </div>
    )
}