import AddForm from "@/Components/AddForm";
import Room from "@/Components/Room";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { PageProps, RoomProps } from "@/types";
import { Head } from "@inertiajs/react";


export default function RoomPage({ auth, rooms }: PageProps<RoomProps>) {
    return (
        <Authenticated 
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-red-800 leading-tight">Room Manager</h2>}
        >
            <Head title="Rooms" />
            <AddForm>
                <AddForm.Room />
            </AddForm>
            <h2 className="font-semibold text-3xl px-4 mt-6 mb-1 md:text-center">Rooms</h2>
            <ul className="flex flex-col justify-center items-center bg-white w-full
                md:max-w-4xl md:mx-auto md:rounded-md"
            >
                {rooms.map( (r) => <Room key={r.id} room={r} /> )}
            </ul>
        </Authenticated>
    );
}