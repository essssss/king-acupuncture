import { Inter } from "next/font/google";
import "./globals.css";
import SideNav from "./sidenav";

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="flex flex-col md:flex-row md:h-screen">
                <SideNav className="md:w-64" />
                <div className="md:flex-1 overflow-auto">{children}</div>
            </body>
        </html>
    );
}
