import Navbar from "../NavBar/Navbar";
import Hero from "../Hero/Hero";

const Home = () => {
    return(
        <>
        <Navbar />
        <Hero cName="hero"
        title="Start Your Jounrey"
        btnName="Book Now"
        btnClass="book"
         />
        </>
    )
}

export default Home;