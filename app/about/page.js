import Bio from "./ui/bio";
import headshot1 from "../../public/headshot1.jpeg";
import headshot2 from "../../public/headshot2.jpeg";
import headshot3 from "../../public/headshot3.jpeg";

export default function Page() {
    const practitioners = [
        {
            name: "Jane Doe",
            bio: "Jane has been practicing for over 9 years. She is an accolyte of Dr. Portia Maroon and well practiced in the Maroonian methodology. She is thrilled to lead the practice",
            headshot: headshot1,
        },
        {
            name: "Janet Donut",
            bio: "Janet has been practicing for 12 years and would love to help you with muscle pain and soreness. As a charter member of the Acupuncturist Society of the South (ASS), she is experienced and ready to help",
            headshot: headshot2,
        },
        {
            name: "John Docent",
            bio: "John has been practicing for 12 years and would love to help you with muscle pain and soreness. As a charter member of the Acupuncturist Society of the South (ASS), he is experienced and ready to help",
            headshot: headshot3,
        },
    ];

    return (
        <>
            <div className="flex flex-col md:flex-row md:overflow-hidden">
                <div className="flex-grow p-6 md:overflow-y-auto ">
                    <div className="justify-center flex text-teal-600 font-sans text-2xl font-medium">
                        Our Practitioners
                    </div>
                    {practitioners.map((item) => {
                        console.log("hi hello");
                        return (
                            <Bio
                                key={item.name}
                                name={item.name}
                                bio={item.bio}
                                headshot={item.headshot}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
}
