import AddForm from "@/Components/AddForm";
import Professor from "@/Components/Professor";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { PageProps, ProfessorType } from "@/types";
import { Head } from "@inertiajs/react";

export default function AddManage({ auth, model, professors }: PageProps<{ model: string, professors: ProfessorType[] }>) {
    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-red-800 leading-tight">Professor Manager</h2>}
        >
            <Head title='Professors'/>
            <AddForm>
                <AddForm.Professor />
            </AddForm>
            <h2 className="font-semibold text-3xl px-4 mt-6 mb-1">Professors</h2>
            <ul className="flex flex-col justify-center items-center bg-white w-full">
                {professors.map( (p) => <Professor key={p.id} id={p.id} name={p.name} age={p.age} /> )}
            </ul>
        </Authenticated>
    );
}
