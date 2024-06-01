import Link from "next/link";
import NavLinks from "./nav-links";
import Image from "next/image";
import logo from "../public/logoipsum-280.svg";

export default function SideNav() {
    return (
        <div className=" p-4 columns-1 rounded-b-3xl md:rounded-b-none md:ml-4 md:mt-4 md:rounded-t-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500  overflow-hidden">
            <Link href="/">
                <div className="flex items-center justify-center">
                    <Image src={logo} alt="Logo" priority={true} />
                </div>
            </Link>
            <div className="columns-4 flex justify-center md:columns-1">
                <NavLinks />
            </div>
        </div>
    );
}
