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

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('professors.store'), { onSuccess: () => reset() });
    };

    return (
        <div>
            <form onSubmit={submit}>
                <div className="flex flex-col">
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
                    <PrimaryButton className='mt-4 py-4 px-7 w-fit' disabled={processing}>Add Professor</PrimaryButton>
                </div>
                <div>
                    <InputError message={errors.name} className='mt-2'/>
                    <InputError message={errors.age} className='mt-2'/>
                </div>
            </form>
        </div>
    );
}

const AddForm = ({ children }: PropsWithChildren) => {
    return (
        <div className='max-w-2xl mx-auto p-4 sm:p-6 lg:p-8'>
            {children}
        </div>
    );
}

AddForm.Professor = AddFormProfessor;

export default AddForm;
