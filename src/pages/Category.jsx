import { Link } from "react-router"
import { useParams } from "react-router"
import { courses } from "../data/courses"

function Category() {
    const {category} = useParams()
 
    const filteredCourses = courses.filter(course => course.category === category)


    return (
        <div>
            
            {filteredCourses.length > 0 ? filteredCourses.map( course => (
                <>
                <span>{course.category} Courses</span>
                <Link
                    to={`/courses/${course.slug}`}
                    className="card"
                    key={course.id}
                    >
                    <span className="category-tag">{course.category}</span>
                    <h2 className="course-title">{course.title}</h2>
                    <span className="duration">{course.duration}</span>
                </Link>
                </>
            )) : 
                <div>No Courses Found!</div>
            }
        </div>
    )
}


export default Category