import { FormEventHandler } from "react";
import PrimaryButton from "./PrimaryButton";
import { ClassProps } from "@/types";
import InputLabel from "./InputLabel";
import { useForm } from "@inertiajs/react";

export default function AddClass({ professors, rooms }: ClassProps) {
    const { data, setData, post, reset } = useForm({
        professor: professors[0].name,
        room: rooms[0].name,
    });

    const submitClass: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('classes.store'), { onSuccess: () => reset() })
    }

    return (
        <form onSubmit={submitClass}>
            <div className="flex justify-center items-center w-full mt-4">
                <div className="flex items-center">

                    <InputLabel htmlFor="professor" value="Professor"/>
                    <select id="professor" name="professor" className="w-72 ml-2" value={data.professor} onChange={ (e) => setData('professor', e.target.value)}>
                        {professors.map( (p) => <option key={p.id} >{p.name}</option> )}
                    </select>

                    <InputLabel htmlFor="room" value="Room" className="ml-4"/>
                    <select id="room" name="room" className="w-72 ml-2" value={data.room} onChange={ (e) => setData('room', e.target.value) } >
                        {rooms.map( (r) => <option key={r.id} >{r.name}</option> )}
                    </select>
                </div>
                
                <PrimaryButton className="ml-4">Add Class</PrimaryButton>
            </div>
        </form>
    );
}