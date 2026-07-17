import { Link } from "react-router"
import { useParams } from "react-router"
import { courses } from "../data/courses"
import './Category.css'

function Category() {
    const {category} = useParams()
 
    const filteredCourses = courses.filter(course => course.category === category)


    return (
        <div>
            <h2 className="category-title">{category} Courses</h2>
            <div className="grid">
                {filteredCourses.length > 0 ? filteredCourses.map( course => (
                
                    <Link
                        to={`/courses/${course.slug}`}
                        className="card"
                        key={course.id}
                        >
                        <span className="category-tag">{course.category}</span>
                        <h2 className="course-title">{course.title}</h2>
                        <span className="duration">{course.duration}</span>
                    </Link>
                    )) : 
                    <div>No Courses Found!</div>
                }
            </div>
        </div>
    )
}


export default Category