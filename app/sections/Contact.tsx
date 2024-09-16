import Title from "@/components/Title";
import '../contact.css'
export default function Contact() {
    return (
        <div id={"contact"} className={"w-full pb-20 pt-10 bg-green-200 my-10 relative overflow-hidden"}>
            <div id="rect-1" className="triangle-shape"></div>
            <div id="rect-2" className="triangle-shape"></div>
            <div id="rect-3" className="triangle-shape"></div>
            <div id="rect-4" className="triangle-shape"></div>
            <div id="rect-5" className="triangle-shape"></div>
            <Title title="Contact"/>
            <br/>
            <br/>
            <div className="flex md:justify-around items-center relative z-50 flex-col gap-10 md:flex-row">
                <div>
                    <div id={"logo"} className={"flex items-center justify-center"}>
                        <img src="/assets/LiveAlarmLogo.svg" alt="Logo" width={90} height={90}/>
                        <p style={{color: "#00FF0A", textShadow: "0px 2px 3px rgba(0, 0, 0, .75)"}}
                           className={"ml-3 text-xl"}>Live Alarm <br/><span
                            style={{color: "#FAFF00"}}>Engineering</span>
                        </p>
                    </div>
                    <p style={{color: "#FF0000", textShadow: "0px 2px 3px rgba(0, 0, 0, .75)"}}
                       className={"ml-3 text-xl"}>Fire Protection System Solution
                    </p>
                </div>
                <div className="text-xl text-center md:text-left">
                    <p>0931 222 922</p>
                    <p>0978 6394 991</p>
                    <p>info@live-alarm.com</p>
                    <br/>
                    <p>No 342, Thukhamain Street, Ward(20), <br/> Shwe Paukkan Township, Yangon</p>
                </div>
            </div>
        </div>
    );
}