import Image from "next/image";

export default function Bio({ name, bio, headshot }) {
    return (
        <div className="rounded-xl flex-row md:flex justify-between bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-4 m-2  shadow-sm flex-grow">
            <div className="p-3 bg-white rounded-lg md:rounded-l-lg m-2">
                <div className="text-lg text-pink-500  text-center font-medium justify-center flex">
                    {name}
                </div>
                <div className="text-md text-center text-purple-800 justify-center flex-grow">
                    {bio}
                </div>
            </div>
            <div className="hidden flex-shrink-0 overflow-hidden md:flex justify-center md:flex-none rounded-lg md:rounded-r-lg m-2">
                <Image
                    src={headshot}
                    height={300}
                    width={240}
                    alt={`picture of ${name}`}
                    className="rounded-lg border border-gray-400"
                    priority={true}
                />
            </div>
        </div>
    );
}
