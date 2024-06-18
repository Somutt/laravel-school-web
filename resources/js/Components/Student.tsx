import { StudentType } from "@/types";
import { Link, useForm } from "@inertiajs/react";
import { HighlightOff, ModeEdit } from "@mui/icons-material";
import { FormEventHandler, useState } from "react";
import TextInput from "./TextInput";
import PrimaryButton from "./PrimaryButton";
import InputError from "./InputError";

export default function Student({ student }: StudentType) {
    const { data, setData, patch, clearErrors, reset, errors } = useForm({
        name: student.name,
        registry: student.registry,
        grade: student.grade
    });

    const [editing, setEditing] = useState(false);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        patch(route('students.update', student.id), { onSuccess: () => setEditing(false) })
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
                        className="w-28"
                        value={data.registry}
                        maxLength={6}
                        onChange={ (e) => setData('registry', e.target.value) }
                    />
                    <TextInput
                        className="w-20 mt-2"
                        value={data.grade}
                        maxLength={2}
                        onChange={ (e) => setData('grade', e.target.value) }
                    />
                    <PrimaryButton className="mt-2 ml-2">Save</PrimaryButton>
                    <button
                        className='mt-2 ml-2'
                        onClick={() => { setEditing(false); reset(); clearErrors(); } }>
                        Cancel
                    </button>
                    <div>
                        <InputError message={errors.name} className='mt-2'/>
                        <InputError message={errors.registry} className='mt-2'/>
                        <InputError message={errors.grade} className='mt-2'/>
                    </div>
                </form>
            :
                <div className="flex justify-begin">
                    <span className="text-gray-800">{ student.name }</span>
                    <span className="ml-4 text-gray-800">{ student.registry }</span>
                    <span className="ml-4 text-gray-600">{ student.grade.toUpperCase() }</span>
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
                    href={route('students.destroy', student.id)}
                >
                    <HighlightOff className="mr-2 hover:text-red-500" />
                </Link>
            </div>
        </li>
    );
}