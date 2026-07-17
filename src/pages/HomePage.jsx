import { Link } from "react-router"
import { courses } from "../data/courses"

function Homepage() {

    return (
        <div>
            <h1 className="home-title">Be the best you can be</h1>
            <p className="home-desc">With our vast arrays of courses on software Engineering, You can be what you want to be </p>
            {courses.map((course) => (
                <Link
                    to={`/courses/${course.slug}`}
                    className="card"
                    key={course.id}
                    >
                    <span className="category-tag">{course.category}</span>
                    <h2 className="course-title">{course.title}</h2>
                    <span className="duration">{course.duration}</span>
                </Link>
            ))}
        </div>
    )
}

export default Homepage