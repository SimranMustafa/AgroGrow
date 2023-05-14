import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Contactimg from "../assets/crop-recommendation.jpg";
import Footer from "../components/Footer";
import Pickleform from "../components/Pickleform";
function Pickle(){
    return(
        <>
        
        <Navbar />
         <Hero 
         cName="hero-mid"
         heroImg = {Contactimg}
         title= "Crop Recommendation"
         

         />
        <Pickleform /> 
      <Footer />
        </>
         
    )
}

export default Pickle;