import { FormEventHandler } from "react";
import PrimaryButton from "./PrimaryButton";
import { ClassProps } from "@/types";
import InputLabel from "./InputLabel";
import { useForm } from "@inertiajs/react";
import TextInput from "./TextInput";
import InputError from "./InputError";

export default function AddClass({ professors, rooms }: ClassProps) {
    const { data, setData, post, reset, errors } = useForm({
        professor: professors[0].name,
        room: rooms[0].name,
        code: '',
    });

    const submitClass: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('classes.store'), { onSuccess: () => reset() })
    }

    return (
        <form onSubmit={submitClass}>
            <div className="flex flex-col items-center w-full mt-4 p-4">
                <div className="flex justify-center items-center">
                    <div className="flex items-center">

                        <InputLabel htmlFor="professor" value="Professor"/>
                        <select id="professor" name="professor" className="w-72 ml-2" value={data.professor} onChange={ (e) => setData('professor', e.target.value)}>
                            {professors.map( (p) => <option key={p.id} >{p.name}</option> )}
                        </select>

                        <InputLabel htmlFor="room" value="Room" className="ml-4"/>
                        <select id="room" name="room" className="w-72 ml-2" value={data.room} onChange={ (e) => setData('room', e.target.value) } >
                            {rooms.map( (r) => <option key={r.id} >{r.name}</option> )}
                        </select>

                        <InputLabel htmlFor="code" value="code" className="ml-4" />
                        <TextInput 
                            isFocused
                            className="w-28 ml-2"
                            name="code" value={data.code} maxLength={5}
                            onChange={(e) => setData('code', e.target.value)}
                        />
                    </div>
                    <PrimaryButton className="ml-4 py-4 px-7 w-fit">Add Class</PrimaryButton>
                </div>
                <InputError message={errors.professor} className='mt-2'/>
                <InputError message={errors.room} className='mt-2'/>
                <InputError message={errors.code} className='mt-2'/>
            </div>
        </form>
    );
}