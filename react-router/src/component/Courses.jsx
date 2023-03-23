import { useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import courses from "../data/courses"
import queryString from 'query-string'

const SORT_KEYS = ['title', 'slug', 'id']

function sortCourses(courses, key) {
    const sortedCourses = [...courses]
    if(!key || !SORT_KEYS.includes(key)) {
        return sortedCourses
    }
    sortCourses.sort((a, b) => (a[key] - b[key]? 1 : -1))
    return sortCourses
}

const Courses = () => {
    const location = useLocation()
    const query = queryString.parse(location.search)
    const navigate = useNavigate()
    const [sortKey, setSortKey] = useState(query.sort)
    sortCourses(courses, sortKey)
    const [sortedCourses, setSortedCourses] = useState()
    useEffect(() => {
        if(!SORT_KEYS.includes(sortKey)){
            navigate('.')
            setSortKey()
            setSortedCourses([...courses])
        }
    }, [sortKey, navigate])
    
    return (
        <>
            <h1>{sortKey ? `Courses sorted by ${sortKey}` : 'Courses'}</h1>  
            {courses.map((course) => (
                <div key = {course.id}>
                    <Link to = {course.slug} className = "courseLink">{course.title}</Link>
                </div>
            ))}
        </>
    ) 
}

export default Courses