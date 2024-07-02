import { StudentProps } from "@/types";
import { useForm } from "@inertiajs/react";
import InputLabel from "./InputLabel";
import InputError from "./InputError";
import PrimaryButton from "./PrimaryButton";
import { FormEventHandler } from "react";

export default function AddClassroomStudent({ students, classroom }: StudentProps) {
    const { data, setData, post, reset, errors } = useForm({
        student: students[0].name,
        classroom_id: classroom?.id,
    })

    const submitStudent: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('classroom_student.store', data.classroom_id), { onSuccess: () => reset() });
    }

    return (
        <form onSubmit={submitStudent}>
            <div className="flex flex-col items-center w-full mt-4 p-4">
                <div className="flex justify-center items-center">
                    <div className="flex items-center">

                        <InputLabel htmlFor="student" value="Student"/>
                        <select id="student" name="student" className="w-72 ml-2" value={data.student} onChange={ (e) => setData('student', e.target.value)}>
                            {students.map( (s) => <option key={s.id} >{s.name}</option> )}
                        </select>

                    </div>
                    <PrimaryButton className="ml-4 py-4 px-7 w-fit">Add Student</PrimaryButton>
                </div>
                <InputError message={errors.student} className='mt-2'/>
            </div>
        </form>
    );
}