import { StudentType } from "@/types";
import { Link } from "@inertiajs/react";
import { HighlightOff } from "@mui/icons-material";

export default function ClassroomStudent({ student, classroom }: StudentType) {
    return (
        <li className="flex justify-between items-center p-4 w-full text-lg md:justify-between">
            <div className="flex justify-begin md:ml-10">
                <span className="text-gray-800">{ student.name }</span>
                <span className="ml-4 text-gray-800">{ student.registry }</span>
                <span className="ml-4 text-gray-600">{ student.grade.toUpperCase() }</span>
            </div>
            <Link
                as="button"
                method="delete"
                href={route('classroom_student.destroy', [student.id, classroom?.id])}
            >
                <HighlightOff className="mr-2 hover:text-red-500" />
            </Link>
        </li>
    );
}