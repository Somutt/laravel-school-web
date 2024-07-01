import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { PageProps } from '@/types';
import ManageButton from '@/Components/ManageButton';

export default function Dashboard({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Management Panel</h2>}
        >
            <Head title="Panel" />

            <div className='flex flex-col justify-center items-center w-full mt-28'>
                <div className='flex justify-evenly items-center w-full'>
                    <Link href={route('professors.index')}>
                        <ManageButton>Professors</ManageButton>
                    </Link>
                    <Link href={route('students.index')}>
                        <ManageButton>Students</ManageButton>
                    </Link>
                </div>
                <div className='flex justify-evenly items-center mt-8 w-full'>
                    <Link href={route('rooms.index')}>
                        <ManageButton>Rooms</ManageButton>
                    </Link>
                    <Link href={route('classrooms.index')}>
                        <ManageButton>Classes</ManageButton>
                    </Link>
                </div>
            </div>

            <footer className="py-16 text-center text-sm text-black absolute bottom-0 w-full">
                Laravel v{laravelVersion} (PHP v{phpVersion})
            </footer>

        </AuthenticatedLayout>
    );
}
