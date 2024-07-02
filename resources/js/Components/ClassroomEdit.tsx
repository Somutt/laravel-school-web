import { ClassroomEditProps } from "@/types";
import { useForm } from "@inertiajs/react";
import { FormEventHandler, useState } from "react";
import { ModeEdit } from "@mui/icons-material";
import PrimaryButton from "./PrimaryButton";

export default function ClassroomEdit({ classroom, professors, rooms }: ClassroomEditProps) {
    const { data, setData, patch, reset } = useForm({
        professor: classroom.professor.name,
        room: classroom.room.name
    });

    const [editingProfessor, setEditingProfessor] = useState(false);

    const [editingRoom, setEditingRoom] = useState(false);

    const submitProfessor: FormEventHandler = (e) => {
        e.preventDefault();

        patch(route('classrooms.update', classroom.id), { onSuccess: () => setEditingProfessor(false) })
    }

    const submitRoom: FormEventHandler = (e) => {
        e.preventDefault();

        patch(route('classrooms.update', classroom.id), { onSuccess: () => setEditingRoom(false) })
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
            {editingRoom ?
                <form onSubmit={submitRoom}>
                    <div className="flex flex-col justify-begin">
                        <div className="flex items-center">
                            <select id="room" name="room" className="w-72 ml-2 mt-2" value={data.room} onChange={ (e) => setData('room', e.target.value)}>
                                    {rooms.map( (r) => <option key={r.id} >{r.name}</option> )}
                            </select>
                        </div>
                        <div>
                            <PrimaryButton className="mt-4 ml-2">Save</PrimaryButton>
                            <button
                                className='mt-4 ml-2'
                                onClick={() => { setEditingRoom(false); reset(); } }>
                                Cancel
                            </button>
                        </div>
                    </div>
                </form>
            :
                <h3 className="flex items-center text-lg px-4 mt-4">
                    <span>Room: </span>
                    <b className="bold ml-1">{classroom.room.name}</b>
                    <button 
                        className={`ml-2 ${editingRoom ? 'hidden' : ''}`}
                        onClick={ () => setEditingRoom(true) }
                    >
                        <ModeEdit className='hover:text-green-500 mr-2' />
                    </button>
                </h3>
            }
        </>
    );
}