import { useRouter } from 'next/router'

function CoursePage() {
    const { query } = useRouter()

    return (
        <div className="p-4">
            <h1>Course: {query.slug}</h1>
            <p>Course details will appear here.</p>
        </div>
    )
}

export default CoursePage;
