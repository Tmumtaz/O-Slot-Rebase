import Navbar from "../NavBar/Navbar";
import Hero from "../Hero/Hero";

const About = () => {
    return(
        <>
        <Navbar />
        <Hero cName="hero-secondary"
        imageName = {require("../../Assets/aboutHero.jpg")}
        title="About Us"
        text="hello"
         />

        </>
    )
}

export default About;
