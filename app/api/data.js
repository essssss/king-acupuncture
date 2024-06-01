"use server";
import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";

export async function getServices() {
    noStore();

    const { rows } = await sql`SELECT * from services`;
    return rows;
}

export async function addService(formData) {
    const rawFormData = {
        name: formData.get("name"),
        description: formData.get("description"),
        price: Number(formData.get("price")),
    };

    const res =
        await sql`INSERT INTO services (name, description, price) VALUES(${rawFormData.name}, ${rawFormData.description}, ${rawFormData.price});`;
    if (res !== null) {
        return "yes!";
    } else {
        return "No dice";
    }
}

export async function removeService(id) {
    noStore();
    const res = await sql`DELETE FROM services WHERE id = ${id};`;
    return res;
}
