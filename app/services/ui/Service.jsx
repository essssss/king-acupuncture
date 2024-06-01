"use client";
import Link from "next/link";
export default function Service({
    title,
    description,
    cost,
    id,
    handleDelete,
}) {
    return (
        <>
            <div className="rounded-xl flex items-center justify-between bg-gray-100 p-4 m-2 shadow-sm">
                <div className="flex-row content-between w-3/4">
                    <div className="text-lg text-pink-500 text-center font-medium justify-center flex">
                        <Link href={`/service/${id}`}>{title}</Link>
                    </div>
                    <div className="text-md text-center text-purple-800 justify-center flex">
                        {description}
                    </div>
                    <div className="text-sm text-center text-indigo-500 justify-center flex">
                        ${cost}
                    </div>
                </div>
                <button
                    onClick={() => {
                        handleDelete(id);
                    }}
                    className="text-center flex items-center justify-center text-white  bg-pink-400 rounded-xl text-4xl h-16 w-16"
                >
                    x
                </button>
            </div>
        </>
    );
}
