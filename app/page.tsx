import Advantages from "@/components/Home/Advantages";
import Feedback from "@/components/Home/Feedback";
import Hero from "@/components/Home/Hero";
import Mission from "@/components/Home/Mission";
import Revolution from "@/components/Home/Revolution";
import Contact from "@/components/contact-section";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
        <Header />
        <div className="mt-8 md:mt-16 lg:mt-20">
          <Hero />
        </div>
        <Mission />
        <Revolution />
        <Advantages />
        <Feedback />
        <Contact />
      <Footer />
    </>
  );
}
