import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function Welcome({ auth }: PageProps) {
    return (
        <>
            <Head title="Welcome" />
            <div className=' flex items-center justify-center min-h-screen bg-sky-900 text-slate-200'>
                <main className='flex flex-col items-center'>
                    <h1 className='text-4xl font-extrabold'>School Manager</h1>
                    <section className="p-10">
                        <nav className="flex flex-1">
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="px-2 py-1 mr-1"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="px-3 py-2 mr-2 rounded-full border-2"
                                    >
                                        Enter
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className='px-3 py-2 mr-2 rounded-full border-2'
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </nav>
                    </section>
                </main>
            </div>
        </>
    );
}
