import Service from "./ui/Service";
import getServices from "../api/data";

export default async function Page() {
    const services = await getServices();

    return (
        <>
            <div className="flex flex-col md:flex-row md:overflow-hidden">
                <div className="flex-grow p-6 md:overflow-y-auto ">
                    <div className="justify-center flex font-sans text-2xl font-medium">
                        Services
                    </div>
                    {services.map((item) => {
                        return (
                            <Service
                                key={item.name}
                                title={item.name}
                                description={item.description}
                                cost={item.price}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
}
