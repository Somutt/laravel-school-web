import AddClass from "@/Components/AddClass";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { ClassProps, PageProps } from "@/types";
import { Head } from "@inertiajs/react";

export default function ClassesPage({ auth, professors, rooms, classes }: PageProps<ClassProps>) {
    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-red-800 leading-tight">Classes Manager</h2>}
        >
            <Head title="Classes" />
            <AddClass professors={professors} rooms={rooms} />
        </Authenticated>
    );
}