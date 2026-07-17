import { NavLink } from "react-router";

export function Navbar() {

    return (
        <div>
        
            <nav>
                <NavLink to="/"><h2 aria-label="Logo">CourseCorrect</h2></NavLink>
                <NavLink to="/category/Beginner">Beginner</NavLink>
                <NavLink to="/category/Intermediate">Intermediate</NavLink>
            </nav>
        </div>
    )
}