import { useParams, useNavigate} from "react-router"
import { courses } from  "../data/courses"

function CourseDetails () {
    const { slug } = useParams()

    const course = courses.find((course) => course.slug === slug)
    const navigate = useNavigate()
    return (
        <>
            <button onClick={() => navigate(-1)}>Go back</button>
            {course === undefined ? 
                <h3>Course Not Found</h3> : 
                <div>
                    <h3>{course.title}</h3>
                    <span className="duration">{course.duration}</span>
                    <p className="desc">{course.description}</p>
                    <h4 className="topics-title">Topics Covered</h4>
                    <div className="topics">
                        {course.topics.map((topic) => <div><span>✔</span> {topic}</div>)}
                    </div>
                </div>
            }
        </>
    )
}


export default CourseDetails