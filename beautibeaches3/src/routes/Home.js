import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import Destination from "../component/Destination";
import Footer from "../component/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://www.australia.com/content/australia/en/_jcr_content/root/hero_homepage/desktop.adapt.1920.high.jpg"
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Footer />
    </>
  );
}
export default Home;
