import Image from "next/image";

export default function Bio({ name, bio, headshot }) {
    return (
        <div className="rounded-xl columns-4 flex justify-between bg-gray-100 p-4 m-2 h-64 shadow-sm">
            <div className="p-3  bg-cyan-100 col-span-3  rounded-md">
                <div className="text-lg text-pink-500  text-center font-medium justify-center flex">
                    {name}
                </div>
                <div className="text-md text-center text-purple-800 justify-center flex">
                    {bio}
                </div>
            </div>
            <div className="h-60 col-span-1">
                <Image src={headshot} height={300} />
            </div>
        </div>
    );
}
