import { RoomType } from "@/types";
import { Link, useForm } from "@inertiajs/react";
import { HighlightOff, ModeEdit } from "@mui/icons-material";
import { FormEventHandler, useState } from "react";
import TextInput from "./TextInput";
import PrimaryButton from "./PrimaryButton";
import InputError from "./InputError";

export default function Room({ room }: RoomType) {
    const { data, setData, patch, clearErrors, reset, errors } = useForm({
        name: room.name,
        capacity: String(room.capacity),
    });

    const [editing, setEditing] = useState(false);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        patch(route('rooms.update', room.id), { onSuccess: () => setEditing(false) })
    }

    return (
        <li className="flex justify-between items-center p-4 w-full text-lg md:justify-between">
            {editing ? 
                <form onSubmit={submit}>
                    <TextInput
                        isFocused
                        className="w-64 mr-2"
                        value={data.name}
                        onChange={ (e) => setData('name', e.target.value) }
                    />
                    <TextInput
                        className="w-20"
                        value={data.capacity}
                        onChange={ (e) => setData('capacity', e.target.value) }
                    />
                    <div className="space-x-2">
                        <PrimaryButton className="mt-4">Save</PrimaryButton>
                        <button
                            className="mt-4"
                            onClick={() => { setEditing(false); reset(); clearErrors(); } }>
                            Cancel
                        </button>
                        <InputError message={errors.name} className="mt-2" />
                        <InputError message={errors.capacity} className="mt-2" />
                    </div>
                </form>
            :
                <div className="flex justify-begin md:ml-10">
                    <span className="text-gray-800">{ room.name }</span>
                    <span className="ml-4 text-gray-600">{ room.capacity }</span>
                </div>
            }
            <div>
                <button
                    className={`${editing ? 'hidden' : ''}`}
                    onClick={ () => setEditing(true) }
                >
                    <ModeEdit className='hover:text-green-500 mr-2' />
                </button>
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