import AddForm from "@/Components/AddForm";
import Professor from "@/Components/Professor";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { PageProps, ProfessorType } from "@/types";
import { Head } from "@inertiajs/react";

export default function AddManage({ auth, model, professors }: PageProps<{ model: string, professors: ProfessorType[] }>) {
    console.log('model:', model, 'professors:', professors);
    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-red-800 leading-tight">Professor Manager</h2>}
        >
            <Head title='Professors'/>
            <AddForm>
                <AddForm.Professor />
            </AddForm>
            <ul>
                {professors.map( (p) => <Professor key={p.id} name={p.name} age={p.age} /> )}
            </ul>
        </Authenticated>
    );
}
