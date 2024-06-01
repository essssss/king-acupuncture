"use client";
import { sql } from "@vercel/postgres";
import { addService } from "../../api/data";
import { useRef, useState } from "react";

export default function AddServiceForm() {
    const ref = useRef();

    const [alertMessage, setAlertMessage] = useState();

    return (
        <form
            ref={ref}
            action={async (formData) => {
                const res = await addService(formData);
                setAlertMessage(res);
                ref.current?.reset();
            }}
        >
            <label className="p-1 m-2" htmlFor="name">
                name:{" "}
            </label>
            <input
                className="p-1 m-2"
                type="text"
                name="name"
                id="name"
                required
                placeholder="name"
            ></input>
            <br />
            <label className="p-1 m-2" htmlFor="description">
                description:{" "}
            </label>
            <input
                className="p-1 m-2"
                type="text"
                name="description"
                id="description"
                required
                placeholder="description"
            ></input>
            <br />
            <label className="p-1 m-2" htmlFor="price">
                price:{" "}
            </label>
            <input
                className="p-1 m-2"
                type="text"
                name="price"
                id="price"
                placeholder="price"
            ></input>
            <br />
            <button className="p-1 m-2 border border-gray-700" type="submit">
                Submit
            </button>
            {alertMessage && <div className="">{alertMessage}</div>}
        </form>
    );
}
