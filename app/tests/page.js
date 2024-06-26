import AddServiceForm from "./ui/AddServiceForm";

export default async function Test() {
    return (
        <>
            <div className="flex flex-col md:flex-row md:overflow-hidden">
                <div className="flex-grow p-6 md:overflow-y-auto ">
                    <div className="justify-center flex font-sans text-pink-500 text-2xl font-medium">
                        Test
                    </div>
                    <div className="rounded-xl text-center text-purple-800 flex-row content-between bg-gray-100 p-4 m-2 shadow-sm">
                        <p>This is where I will test my database</p>
                        <div className="bg-gray-200 ">
                            <p>Add Services</p>
                            <AddServiceForm />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
