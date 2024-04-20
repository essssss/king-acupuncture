export default function Service({ title, description, cost }) {
    return (
        <div className="rounded-xl  flex-row content-between bg-gray-100 p-4 m-2 shadow-sm">
            <div className="text-lg text-pink-500 text-center font-medium justify-center flex">
                {title}
            </div>
            <div className="text-md text-center text-purple-800 justify-center flex">
                {description}
            </div>
            <div className="text-sm text-center text-indigo-500 justify-center flex">
                ${cost}.00
            </div>
        </div>
    );
}
