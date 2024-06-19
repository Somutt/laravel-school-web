import { RoomType } from "@/types";
import { Link } from "@inertiajs/react";
import { HighlightOff } from "@mui/icons-material";

export default function Room({ room }: RoomType) {
    return (
        <li className="flex justify-between items-center p-4 w-full text-lg md:justify-between">
            <div className="flex justify-begin md:ml-10">
                <span className="text-gray-800">{ room.name }</span>
                <span className="ml-4 text-gray-600">{ room.capacity }</span>
            </div>
            <div>
                <Link
                    as="button"
                    method="delete"
                    href={route('rooms.destroy', room.id)}
                >
                    <HighlightOff className="mr-2 hover:text-red-500" />
                </Link>
            </div>
        </li>
    );
}