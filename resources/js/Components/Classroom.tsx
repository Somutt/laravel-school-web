import { ClassroomType } from "@/types";
import { Link } from "@inertiajs/react";
import { HighlightOff } from "@mui/icons-material";

export default function Classroom({ classroom }: ClassroomType) {
    return (
        <li className="flex justify-between items-center p-4 w-full text-lg md:justify-between">
            <div className="flex justify-begin md:ml-10">
                <span className='text-gray-800'>{classroom.professor.name}</span>
                <span className='ml-4 text-gray-800'>{classroom.room.name}</span>
                <span className='ml-4 text-gray-600'>{classroom.code}</span>
            </div>
            <div>
                <Link
                    as="button"
                    method="delete"
                    href={route('classes.destroy', classroom.id)}
                >
                    <HighlightOff className="mr-2 hover:text-red-500" />
                </Link>
            </div>
        </li>
    );
}