import "./ServicesStyles.css";
import ServicesData from "./ServicesData";
import Service1 from "../assets/crop.jpg";
import Service2 from "../assets/disease.jpg";
import Service3 from "../assets/fertilizer.jpg";



function Services(){
    return (
        <div className="services">
            <h1>You can select from the following Services</h1>
            <div className="servicescard">
                <ServicesData 
                    pageUrl = "/pickleform"              
                    img={Service1}
                    heading = "Crop Recommendation"
                    text="We will suggest crops."
                >
                </ServicesData>

                <ServicesData
                    img={Service2}
                    heading = "Disease Prediction"
                    text="We can predict disease."
                >
                </ServicesData>

                <ServicesData
                    img={Service3}
                    heading = "Fertilizer Recommendation"
                    text="We will recommend fertilizer."
                >
                </ServicesData>
            </div>
        </div>
    );
}

export default Services;