import { ProfessorType } from "@/types";
import { Link } from "@inertiajs/react";
import { HighlightOff, ModeEdit } from "@mui/icons-material";

export default function Professor({ id, name, age }: ProfessorType) {
    return (
        <li className="flex justify-between items-center p-4 w-full text-lg" >
            <div className="flex justify-begin">
                <span className='text-gray-800'>{name}</span>
                <span className=' ml-4 text-gray-600'>{ age }</span>
            </div>
            <div>
                <Link
                    as="button"
                    method="delete"
                    href={route('professors.destroy', id)}
                >
                    <HighlightOff className="mr-2 hover:text-red-500" />
                </Link>
            </div>
        </li>
    );
}
