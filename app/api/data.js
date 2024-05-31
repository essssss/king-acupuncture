import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";

export default async function getServices() {
    "use server";
    noStore();

    const { rows } = await sql`SELECT * from services`;
    return rows;
}
