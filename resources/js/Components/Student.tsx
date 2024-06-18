import { StudentType } from "@/types";
import { Link, useForm } from "@inertiajs/react";
import { HighlightOff } from "@mui/icons-material";

export default function Student({ student }: StudentType) {
    const { data, setData, patch, clearErrors, reset, errors } = useForm({
        name: student.name,
        registry: student.registry,
        grade: student.grade
    });
    
    return (
        <li className="flex justify-between items-center p-4 w-full text-lg md:justify-evenly" >
            <div className="flex justify-begin">
                <span className="text-gray-800">{ student.name }</span>
                <span className="ml-4 text-gray-800">{ student.registry }</span>
                <span className="ml-4 text-gray-600">{ student.grade.toUpperCase() }</span>
            </div>
            <div>
                <Link
                    as="button"
                    method="delete"
                    href={route('students.destroy', student.id)}
                >
                    <HighlightOff className="mr-2 hover:text-red-500" />
                </Link>
            </div>
        </li>
    );
}