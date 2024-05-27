"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Tests", href: "/tests" },
];

export default function NavLinks() {
    const pathname = usePathname();
    return (
        <div className="flex md:flex-col">
            {links.map((link) => {
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            "flex items-center justify-center gap-2 rounded-md m-3 p-3 text-sm font-medium text-white hover:text-gray-300 hover:border-gray-200 md:p-2 md:px-3 border-2 ",
                            {
                                "bg-gradient-to-tl from-indigo-400 via-purple-400 to-pink-400 text-white border-solid":
                                    pathname === link.href,
                            },
                            {
                                "border-transparent box-border":
                                    pathname !== link.href,
                            }
                        )}
                    >
                        <p>{link.name}</p>
                    </Link>
                );
            })}
        </div>
    );
}
