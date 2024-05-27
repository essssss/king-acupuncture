import Image from "next/image";

export default function Bio({ name, bio, headshot }) {
    return (
        <div className="rounded-xl flex justify-between bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-4 m-2 h-64 shadow-sm max-w-4xl">
            <div className="p-3 bg-white rounded-l-md">
                <div className="text-lg text-pink-500  text-center font-medium justify-center flex">
                    {name}
                </div>
                <div className="text-md text-center text-purple-800 justify-center flex">
                    {bio}
                </div>
            </div>
            <div className="overflow-hidden flex-none rounded-r-md">
                <Image
                    src={headshot}
                    height={300}
                    width={200}
                    alt={`picture of ${bio.name}`}
                />
            </div>
        </div>
    );
}
