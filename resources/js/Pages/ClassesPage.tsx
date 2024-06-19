import Authenticated from "@/Layouts/AuthenticatedLayout";
import { ClassProps, PageProps } from "@/types";
import { Head } from "@inertiajs/react";

export default function ClassesPage({ auth, professors, students, rooms, classes }: PageProps<ClassProps>) {
    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-red-800 leading-tight">Classes Manager</h2>}
        >
            <Head title="Classes" />
        </Authenticated>
    );
}