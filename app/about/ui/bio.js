import Image from "next/image";

export default function Bio({ name, bio, headshot }) {
    return (
        <div className="rounded-xl flex-row md:flex justify-between bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-4 m-2  shadow-sm flex-grow">
            <div className="p-3 bg-white rounded-t-md md:rounded-l-md  ">
                <div className="text-lg text-pink-500  text-center font-medium justify-center flex">
                    {name}
                </div>
                <div className="text-md text-center text-purple-800 justify-center flex-grow">
                    {bio}
                </div>
            </div>
            <div className=" flex-shrink-0 overflow-hidden flex justify-center md:flex-none rounded-r-md">
                <Image
                    src={headshot}
                    height={300}
                    width={240}
                    alt={`picture of ${name}`}
                />
            </div>
        </div>
    );
}
