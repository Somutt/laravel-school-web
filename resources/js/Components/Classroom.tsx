import { ClassroomType } from "@/types";
import { Link } from "@inertiajs/react";
import { HighlightOff } from "@mui/icons-material";

export default function Classroom({ classroom }: ClassroomType) {
    return (
        <li className="flex justify-between items-center p-4 w-full text-lg md:justify-between">
            <Link 
                as="button"
                method="get"
                href={route('classrooms.show', classroom.code)}
            >
                <div className="flex justify-begin md:ml-10">
                    <span className='text-gray-800'>{classroom.professor.name}</span>
                    <span className='ml-4 text-gray-800'>{classroom.room.name}</span>
                    <span className='ml-4 text-gray-600'>{classroom.code.toUpperCase()}</span>
                </div>
            </Link>
            <div>
                <Link
                    as="button"
                    method="delete"
                    href={route('classrooms.destroy', classroom.id)}
                >
                    <HighlightOff className="mr-2 hover:text-red-500" />
                </Link>
            </div>
        </li>
    );
}