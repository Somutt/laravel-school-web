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
            <div className="flex flex-col justify-center items-center w-full">
                <div className="">

                    <InputLabel htmlFor="professor" value="Select Professor" className="mt-4"/>
                    <select id="professor" name="professor" className="w-72" value={data.professor} onChange={ (e) => setData('professor', e.target.value)}>
                        {professors.map( (p) => <option key={p.id} >{p.name}</option> )}
                    </select>

                    <InputLabel htmlFor="room" value="Select Room" className="mt-2"/>
                    <select id="room" name="room" className="w-72" value={data.room} onChange={ (e) => setData('room', e.target.value) } >
                        {rooms.map( (r) => <option key={r.id} >{r.name}</option> )}
                    </select>
                </div>
                
                <PrimaryButton className="mt-4">Add Class</PrimaryButton>
            </div>
        </form>
    );
}