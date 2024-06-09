import { ButtonHTMLAttributes } from "react";

export default function ManageButton({ children }: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            className="px-6 py-4 w-36 h-14 bg-red-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase
                        hover:bg-red-700 hover:border-red-100">
            {children}
        </button>
    );
}
