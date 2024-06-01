"use client";
import Service from "./ui/Service";
import { getServices, removeService } from "../api/data";
import { useEffect, useState } from "react";

export default function Page() {
    const [services, setServices] = useState([]);

    const fetchServices = async () => {
        const newServices = await getServices();
        setServices(newServices);
    };
    useEffect(() => {
        fetchServices();
    }, []);

    const handleDelete = async (id) => {
        removeService(id);
        fetchServices();
    };

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
                                key={item.id}
                                title={item.name}
                                description={item.description}
                                cost={item.price}
                                id={item.id}
                                handleDelete={handleDelete}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
}
