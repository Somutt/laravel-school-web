import AddForm from "@/Components/AddForm";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { PageProps, StudentProps } from "@/types";
import { Head } from "@inertiajs/react";


export default function StudentPage({ auth, students }: PageProps<StudentProps>) {
    return (
        <Authenticated 
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-red-800 leading-tight">Student Manager</h2>}
        >
            <Head title="Students" />
            <AddForm>
                <AddForm.Student />
            </AddForm>
            <h2 className="font-semibold text-3xl px-4 mt-6 mb-1 md:text-center">Students</h2>
        </Authenticated>
    );
}