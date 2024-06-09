import { useForm } from "@inertiajs/react";
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

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('professors.store'), { onSuccess: () => reset() });
    };

    return (
        <div className='max-w-2xl mx-auto p-4 sm:p-6 lg:p-8'>
            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="name" value="Name"/>
                    <TextInput name="name" value={data.name} onChange={(e) => setData('name', e.target.value)}/>
                    <InputError message={errors.name} className='mt-2'/>
                </div>
                <div>
                    <InputLabel htmlFor="age" value="Age"/>
                    <TextInput name="age" value={data.age} onChange={(e) => setData('age', e.target.value)}/>
                    <InputError message={errors.age} className='mt-2'/>
                </div>
                <PrimaryButton className='mt-4' disabled={processing}>Add Professor</PrimaryButton>
            </form>
        </div>
    );
}

const AddForm = ({ children }: PropsWithChildren) => {
    return (
        <>
            {children}
        </>
    );
}

AddForm.Professor = AddFormProfessor;

export default AddForm;
