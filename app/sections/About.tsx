import Link from "next/link";

export default function About() {
    return (
        <div  className="text-justify md:text-center text-xl md:w-6/12 mx-auto my-10 leading-9 font-light p-10 md:p-0">
            Live Alarm Engineering delivers cutting-edge fire protection systems, ensuring safety and compliance across Myanmar. We design and install customized solutions that protect your property and meet the highest international standards.
            <br/>
            <br/>
            <br/>
            <Link href={"/about"} className={"w-fit"}>
                <div className={"w-fit mx-auto bg-gradient-to-r from-green-200 to-yellow-200 p-5 rounded-full shadow-xl animate-bounce"}>
                    Learn more about us {'-->'}
                </div>
            </Link>
        </div>
    );
}