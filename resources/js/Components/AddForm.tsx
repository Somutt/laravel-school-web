import { Link, useForm } from "@inertiajs/react";
import { FormEventHandler, PropsWithChildren } from "react";
import InputError from "./InputError";
import PrimaryButton from "./PrimaryButton";
import InputLabel from "./InputLabel";
import TextInput from "./TextInput";

const AddFormProfessor = () => {
    const { data, setData, post, processing, reset, errors } = useForm({
        name: '',
        age: '',
    });

    const submitProfessor: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('professors.store'), { onSuccess: () => reset() });
    };

    return (
        <form onSubmit={submitProfessor}>
            <div className="flex flex-col md:flex-row">
                <div className="flex items-center">
                    <div className="mr-2">
                        <InputLabel htmlFor="name" value="Name"/>
                        <TextInput
                            isFocused
                            className="w-64"
                            name="name" value={data.name}
                            onChange={(e) => setData('name', e.target.value)}/>
                    </div>
                    <div className="mr-2">
                        <InputLabel htmlFor="age" value="Age"/>
                        <TextInput
                            className="w-20"
                            name="age" value={data.age} maxLength={2}
                            onChange={(e) => setData('age', e.target.value)}
                        />
                    </div>
                </div>
                <PrimaryButton className='mt-4 py-4 px-7 w-fit md:px-4 md:py-2' disabled={processing}>Add Professor</PrimaryButton>
            </div>
            <div>
                <InputError message={errors.name} className='mt-2'/>
                <InputError message={errors.age} className='mt-2'/>
            </div>
        </form>
    );
}

const AddFormStudent = () => {
    const { data, setData, post, processing, reset, errors } = useForm({
        name: '',
        registry: '',
        grade: '',
    });

    const submitStudent: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('students.store'), { onSuccess: () => reset() });
    }

    return (
        <form onSubmit={submitStudent}>
            <div className="flex flex-col md:flex-row">
                <div className="flex items-center">
                    <div className="mr-2">
                        <InputLabel htmlFor="name" value="Name" />
                        <TextInput
                            isFocused
                            className="w-64"
                            name="name" value={data.name}
                            onChange={(e) => setData('name', e.target.value)}/>
                    </div>
                    <div className="mr-2">
                        <InputLabel htmlFor="registry" value="Registry" />
                        <TextInput
                            className="w-28"
                            name="registry" value={data.registry} maxLength={6}
                            onChange={(e) => setData('registry', e.target.value)}/>
                    </div>
                    <div className="mr-2">
                        <InputLabel htmlFor="grade" value="Grade" />
                        <TextInput
                            className="w-20"
                            name="name" value={data.grade} maxLength={2}
                            onChange={(e) => setData('grade', e.target.value)}/>
                    </div>
                </div>
                <PrimaryButton className='mt-4 py-4 px-7 w-fit md:px-4 md:py-2' disabled={processing}>Add Student</PrimaryButton>
            </div>
                <div>
                    <InputError message={errors.name} className='mt-2'/>
                    <InputError message={errors.registry} className='mt-2'/>
                    <InputError message={errors.grade} className='mt-2'/>
                </div>
        </form>
    );
}

const AddFormRoom = () => {
    const { data, setData, post, processing, reset, errors } = useForm({
        name: '',
        capacity: '',
    });

    const submitRoom: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('rooms.store'), { onSuccess: () => reset() })
    }

    return (
        <form onSubmit={submitRoom}>
            <div className="flex flex-col md:flex-row">
                <div className="flex items-center">
                    <div className="mr-2">
                        <InputLabel htmlFor="name" value="Name" />
                        <TextInput
                            isFocused
                            className="w-64"
                            name="name" value={data.name} maxLength={30}
                            onChange={(e) => setData('name', e.target.value)}/>
                    </div>
                    <div className="mr-2">
                        <InputLabel htmlFor="capacity" value="Capacity" />
                        <TextInput
                            className="w-24"
                            name="name" value={data.capacity} maxLength={3}
                            onChange={(e) => setData('capacity', e.target.value)}/>
                    </div>
                </div>
                <PrimaryButton className='mt-4 py-4 px-7 w-fit md:px-4 md:py-2' disabled={processing}>Add Room</PrimaryButton>
            </div>
                <div>
                    <InputError message={errors.name} className='mt-2'/>
                    <InputError message={errors.capacity} className='mt-2'/>
                </div>
        </form>
    );
}

const AddForm = ({ children }: PropsWithChildren) => {
    return (
        <div className='flex justify-center w-full mx-auto p-4 sm:p-6 lg:p-8'>
            {children}
        </div>
    );
}

AddForm.Professor = AddFormProfessor;
AddForm.Student = AddFormStudent;
AddForm.Room = AddFormRoom;

export default AddForm;
