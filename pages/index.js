import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect } from "react";

const FrontEnd = dynamic(() => import("../components/FrontEnd"));
const Heads = dynamic(() => import("../components/Heads"));
const Contact = dynamic(() => import("../components/Contact"));
const Skills = dynamic(() => import("../components/Skills"));
const Footer = dynamic(() => import("../components/Footer"));
const About = dynamic(() => import("../components/About"));
const Card = dynamic(() => import("../components/Card"));
const Projects = dynamic(() => import("../components/Projects"));

const Particalsbackground = dynamic(
  () => import("../components/Particalsbackground"),
  {
    ssr: false,
  }
);

export default function Home() {
  const text =
    "Our scars can destroy us. even after the physical wounds have healed. But if we can survive them... They can transform us. They can give us the power. To Endure... And the strength to fight. (◣ _ ◢)";

  useEffect(() => {
    console.log(text);
  }, []); // The empty dependency array ensures it runs only once when the component mounts

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Hello there this is Ashwin Kumar Software Engineer and Digital Marketer from Pune"
        />
        <meta
          name="keywords"
          content="Software Engineer, Digital Marketer, web developer,Freelance web developer,react web developer, Ashwin Kumar,"
        />
        <meta
          name="google-site-verification"
          content="2JiSX7E5qG08N5uRVo_unzYtuOoyU741bNi--funpxc"
        />
      </Head>
      <div className="min-h-screen px-3 sm:px-5 scroll-smooth ">
        <Particalsbackground />
        <Heads />
        <Card />
        <About />
        <Projects />
        <FrontEnd />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
