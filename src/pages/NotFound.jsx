import { Link } from "react-router"

function NotFound() {
    return (
        <>
            <Link className="go-back-btn" to='/'> Go back</Link>
            <h2>Page Not Found</h2>
        </>
    )
}

export default NotFound