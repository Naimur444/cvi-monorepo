

import Header from "../../components/header"
import Footer from "../../components/footer"

import ContactSection from "../../components/contact-section"
import LocationComponent from "../../components/contact/location-component"

export default function ContactPage() {
  return (
   <>
   <Header />
   <div className="w-full max-w-7xl mx-auto mt-8 md:mt-16 lg:mt-20 px-6 md:px-0">
     <h1 style={{ fontSize: 39, marginTop:120, marginBottom: 48,textAlign: 'start', fontWeight: 700 }}>Contact Us.</h1>
     <LocationComponent />
     <ContactSection />
   </div>
   <Footer />
   </>
      
      
    
  )
}
