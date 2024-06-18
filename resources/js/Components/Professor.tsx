import { ProfessorType } from "@/types";
import { useState } from "react";
import { Link, useForm } from "@inertiajs/react";
import { HighlightOff, ModeEdit } from "@mui/icons-material";
import TextInput from "./TextInput";
import PrimaryButton from "./PrimaryButton";
import InputError from "./InputError";

export default function Professor({ professor }: ProfessorType) {
    const { data, setData, patch, clearErrors, reset, errors } = useForm({
        name: professor.name,
        age: String(professor.age)
    });

    const [editing, setEditing] = useState(false);

    const submit = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault();

        patch(route('professors.update', professor.id), { onSuccess: () => setEditing(false) })
    }

    return (
        <li className="flex justify-between items-center p-4 w-full text-lg md:justify-evenly" >
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
                        value={data.age}
                        maxLength={2}
                        onChange={ (e) => setData('age', e.target.value) }
                    />
                    <div className='space-x-2'>
                            <PrimaryButton className='mt-4'>Save</PrimaryButton>
                            <button
                                className='mt-4'
                                onClick={() => { setEditing(false); reset(); clearErrors(); } }>
                                Cancel
                            </button>
                            <InputError message={errors.name} className='mt-2'/>
                            <InputError message={errors.age} className='mt-2'/>
                    </div>
                </form>
            : 
                <div className="flex justify-begin">
                    <span className='text-gray-800'>{professor.name}</span>
                    <span className='ml-4 text-gray-600'>{ professor.age }</span>
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
                    className={`${editing ? 'hidden' : ''}`}
                    as="button"
                    method="delete"
                    href={route('professors.destroy', professor.id)}
                >
                    <HighlightOff className="mr-2 hover:text-red-500" />
                </Link>
            </div>
        </li>
    );
}
