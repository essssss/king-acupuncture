import { getServiceById } from "../../api/data";

export default async function Page({ params }) {
    const service = await getServiceById(params.id);
    console.log(service);
    return (
        <>
            <div>Service: {params.id}</div>
            <div>Title: {service.name}</div>
            <div>description: {service.description}</div>
            <div>price: ${service.price}</div>
        </>
    );
}
