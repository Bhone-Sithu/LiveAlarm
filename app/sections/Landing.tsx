export default function Landing() {
    return (
        <>
            <div className={"bg-[url('/assets/JasminePalace.jpg')] bg-cover bg-center md:bg-left-top fixed w-screen h-screen top-0 left-0 z-0"} id={"landing"}></div>
            <div className={"fixed w-screen h-screen top-0 left-0 bg-black opacity-50 z-10  "}></div>
            <div className={"fixed top-1/3 text-gray-200 text-3xl tracking-wider flex flex-col gap-5 p-10 z-20 text-justify"}>
                <h1>Protect what matters most with </h1>
                <h1>Our Cutting-Edge Fire Protection Systems </h1>
                <h1>which comply with International Standard</h1>
            </div>
        </>
    );
}