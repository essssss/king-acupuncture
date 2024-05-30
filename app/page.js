import Image from "next/image";
import storefront from "../public/storefront.jpg";

export default function Home() {
    return (
        <main className="bg-gray-100 min-h-screen">
            <div className=" flex flex-col items-center">
                <div className="bg-indigo-200 p-2 m-4">
                    <p className="font-bold text-3xl">
                        Welcome to King Acupunture!
                    </p>
                </div>
                <div className="p-4">
                    <Image
                        src={storefront}
                        width={400}
                        height="auto"
                        className=" rounded-lg overflow-hidden"
                        alt="Our Shop"
                        priority={true}
                    />
                </div>
                <div className="text-center m-8 bg-cyan-100 justify-center">
                    <p className="px-20">
                        At our clinic, we combine the wisdom of traditional
                        Chinese medicine with contemporary healthcare practices.
                        Our expert acupuncturists are dedicated to helping you
                        achieve optimal health and wellness. Whether you're
                        seeking relief from pain, stress, or other health
                        concerns, we're here to support your journey to balance
                        and vitality.
                    </p>
                    <p>
                        Discover the transformative power of acupuncture with
                        us.
                    </p>
                </div>
            </div>
        </main>
    );
}
