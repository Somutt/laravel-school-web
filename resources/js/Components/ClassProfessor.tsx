import { ClassroomProps } from "@/types";
import { useForm } from "@inertiajs/react";
import { FormEventHandler, useState } from "react";
import { ModeEdit } from "@mui/icons-material";
import PrimaryButton from "./PrimaryButton";

export default function ClassProfessor({ classroom, professors }: ClassroomProps) {
    const { data, setData, patch, reset } = useForm({
        professor: classroom.professor.name,
    });

    const [editingProfessor, setEditingProfessor] = useState(false);

    const submitProfessor: FormEventHandler = (e) => {
        e.preventDefault();

        patch(route('classrooms.update', classroom.id), { onSuccess: () => reset() })
    }

    return (
        <>
            {editingProfessor ?
                <form onSubmit={submitProfessor}>
                    <div className="flex flex-col justify-begin">
                        <div className="flex items-center">
                            <select id="professor" name="professor" className="w-72 ml-2 mt-2" value={data.professor} onChange={ (e) => setData('professor', e.target.value)}>
                                    {professors.map( (p) => <option key={p.id} >{p.name}</option> )}
                            </select>
                        </div>
                        <div>
                            <PrimaryButton className="mt-4 ml-2">Save</PrimaryButton>
                            <button
                                className='mt-4 ml-2'
                                onClick={() => { setEditingProfessor(false); reset(); } }>
                                Cancel
                            </button>
                        </div>
                    </div>
                </form>
            :
                <h3 className="flex items-center text-lg px-4 mt-4">
                    <span>Professor: </span>
                    <b className="bold ml-1">{classroom.professor.name}</b>
                    <button 
                        className={`ml-2 ${editingProfessor ? 'hidden' : ''}`}
                        onClick={ () => setEditingProfessor(true) }
                    >
                        <ModeEdit className='hover:text-green-500 mr-2' />
                    </button>
                </h3>
            }
        </>
    );
}