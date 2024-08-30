
import NavBar from "@/components/NavBar";
import Landing from "@/app/sections/Landing";
import About from "@/app/sections/About";
import Title from "@/components/Title";
import Services from "@/app/sections/Services";
import Projects from "@/app/sections/Projects";
import Contact from "@/app/sections/Contact";

export default function Home() {
  return (
      <>

    <main className="min-h-screen  z-10 relative" id={"landing"}>
      <NavBar/>

        <Landing/>
      <div className={"bg-white rounded-xl w-full z-30 relative py-5"} style={{marginTop: "100vh", height: "100%"}}>
        <div className={"w-1 h-1"}></div>
        <Title title={"About Us"}/>
        <About/>
        <Services/>
        <div id={"projects"}></div>
        <Title  title={"Projects"} />
        <Projects />
        <Contact/>
        <p className={"text-center font-light font-xs"}>© 2024 LIVE ALARM ENGINEERING COMPANY LIMITED All Rights
          Reserved</p>
      </div>
    </main>
      </>
  );
}
