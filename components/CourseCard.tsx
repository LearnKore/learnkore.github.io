interface CourseCardProps {
    title: string;
    description: string;
}

function CourseCard({ title, description }: CourseCardProps) {
    return (
        <div className="p-4 border rounded shadow-sm">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-sm text-gray-600">{description}</p>
        </div>
    );
}

export default CourseCard;
