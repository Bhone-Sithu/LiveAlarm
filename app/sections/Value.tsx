import ServiceCard from "@/components/ServiceCard";

export default function Values() {
    let servicesInfo = [
        {
            title: "System Design",
            description: "Our approach to design-and-build customizes system that\n" +
                "fit our customers' requirements. The cutomer realizes\n" +
                "maximum value for project investment as we taken an\n" +
                "active role in the pre-construction activities.",
            photo: "/assets/SystemDesign.png"
        },
        {
            title: "AutoCAD",
            description: "We matain a team of professionals armed with the latest\n" +
                "softwares propelling our drafting with speed and accurancy. This\n" +
                "ensure that any detail is delivered and completed on schedule\n" +
                "and with our customers' budget.",
            photo: "/assets/AutoCad.png"
        },
        {
            title: "In-house Engineering",
            description: "Our in-house resources apply the coustomer's\n" +
                "desire to design fire protection system enable a\n" +
                "building or system to operate a peak efficiency.\n" +
                "Our drive to offer creative solutions has earned\n" +
                "LIVE ALARM Engineering Group the confidence of\n" +
                "our customers in various buildings.",
            photo: "/assets/InHouseEngineering.png"
        },
        {
            title: "Tie-in project",
            description: "The term 'Tie-in' is generally used to described the connection of\n" +
                "FPS to Integerated Supervisory Control System of the building. These\n" +
                "projects are usually required to be completed with a specific time\n" +
                "frame without causing inconvenience to the operation schedule.",
            photo: "/assets/TieInProject.png"
        }
    ]
    return (
        <div id={"services"} className={"relative h-fit"}>
            <img src={"/wave.svg"} alt={"Wave"} className={"z-30"}/>
            <h2 className="absolute mx-auto w-full md:top-48 text-3xl font-medium mt-10 text-center z-20">
                Our Value
            </h2>
            <div className={" w-full h-fit bg-gradient-to-b from-[#D4FFD8] via-[#FFFA88] via-70% to-white z-0 md:pt-20 pt-32"}>
                <div className={"flex flex-col gap-20"}>
                    {servicesInfo.map((service,index) => (
                        <div key={index} > <ServiceCard description={service.description} photo={service.photo} index={index} title={service.title} /></div>
                    ))}
                </div>
            </div>
        </div>
    );
}