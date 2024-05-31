import { sql } from "@vercel/postgres";

export default async function Test() {
    async function addService(formData) {
        "use server";

        const rawFormData = {
            name: formData.get("name"),
            description: formData.get("description"),
            price: Number(formData.get("price")),
        };

        const res =
            await sql`INSERT INTO services (name, description, price) VALUES(${rawFormData.name}, ${rawFormData.description}, ${rawFormData.price});`;

        console.log(rawFormData);
    }
    return (
        <>
            <div className="flex flex-col md:flex-row md:overflow-hidden">
                <div className="flex-grow p-6 md:overflow-y-auto ">
                    <div className="justify-center flex font-sans text-pink-500 text-2xl font-medium">
                        Test
                    </div>
                    <div className="rounded-xl text-center text-purple-800 flex-row content-between bg-gray-100 p-4 m-2 shadow-sm">
                        <p>This is where I will test my database</p>
                        <form action={addService}>
                            <label htmlFor="name">name: </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                required
                                placeholder="name"
                            ></input>
                            <label htmlFor="description">description: </label>
                            <input
                                type="text"
                                name="description"
                                id="description"
                                required
                                placeholder="description"
                            ></input>
                            <label htmlFor="price">price: </label>
                            <input
                                type="text"
                                name="price"
                                id="price"
                                placeholder="price"
                            ></input>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
