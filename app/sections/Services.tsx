import ServiceCard from "@/components/ServiceCard";

export default function Services() {
    let servicesInfo = [
        {
            title: "Design",
            description: "Customized fire protection system designs based on Singapore standards and local regulations.\n" +
                "In-house engineering using AutoCAD for precise, efficient, and detailed planning.\n" +
                "Solutions tailored to ensure long-term reliability, with a lifespan of up to 20 years.",
            photo: "/assets/Design.svg"
        },
        {
            title: "Installation",
            description: "Expert installation following strict compliance with project specifications and safety standards.\n" +
                "Phase-by-phase implementation to minimize disruption to existing operations.\n" +
                "Thorough testing and commissioning to ensure optimal system performance.",
            photo: "/assets/Install.png"
        },
        {
            title: "Demolition",
            description: "Safe and systematic removal of outdated fire protection systems.\n" +
                "Minimal impact on existing infrastructure and ongoing operations.\n" +
                "Compliance with health, safety, and environmental regulations during demolition.",
            photo: "/assets/Demolition.png"
        },
        {
            title: "Project Documentation",
            description: "Comprehensive documentation of all phases, including progress reports, schedules, and inspection checklists.\n" +
                "Detailed drawings and material submissions for approval.\n" +
                "Complete operation and maintenance manuals provided at project handover.",
            photo: "/assets/Documentation.svg"
        }
    ]
    return (
        <div className={"relative h-fit"}>
            <img src={"/wave.svg"} alt={"Wave"} className={"z-30"}/>
            <h2 className="absolute mx-auto w-full md:top-48 text-3xl font-medium mt-10 text-center z-20">
                Our Services
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