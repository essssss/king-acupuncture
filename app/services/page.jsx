import Service from "./ui/Service";

export default function Page() {
    const serviceItems = [
        {
            name: "Acupuncture",
            description:
                "An acupunture session with one of our top practitioners",
            cost: 35,
        },
        {
            name: "Massage",
            description:
                "A massage session with one of our experienced practitioners",
            cost: 85,
        },
        {
            name: "Hot Stone",
            description:
                "A hot stone session with one of our experienced practitioners",
            cost: 105,
        },
    ];

    return (
        <>
            <div className="flex flex-col md:flex-row md:overflow-hidden">
                <div className="flex-grow p-6 md:overflow-y-auto ">
                    <div className="justify-center flex font-sans text-2xl font-medium">
                        Services
                    </div>
                    {serviceItems.map((item) => {
                        console.log("hi hello");
                        return (
                            <Service
                                key={item.name}
                                title={item.name}
                                description={item.description}
                                cost={item.cost}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
}
