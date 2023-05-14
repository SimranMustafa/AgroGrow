import "./MembersStyles.css";
import ServicesData from "./ServicesData";
import Service1 from "../assets/user.png";
import Service2 from "../assets/disease.jpg";
import Service3 from "../assets/fertilizer.jpg";
import MembersData from "./MembersData";
function Members(){
    return (
        
        <div className="members">
            <h1>Following are the members:</h1>
           
            <div className="membercard">
            <div className="row1">
                <MembersData
                    img={Service1}
                    heading = "Simran Mustafa"
                    text="https://github.com/SimranMustafa"
                >
                </MembersData>
                <MembersData
                    img={Service1}
                    heading = "Isha Singhal"
                    text="https://github.com/readytolearn23"
                >
                </MembersData>
                
                <MembersData
                    img={Service1}
                    heading = "Sanhitha"
                    text="https://github.com/sanhitha09"
                >
                </MembersData>
                <MembersData
                    img={Service1}
                    heading = "Mayank Ahuja"
                    text="http://github.com/mayankA451"
                >
                </MembersData>
                </div>

                <div className="row2">
                <MembersData
                    img={Service1}
                    heading = "Anmol Patankar"
                    text="https://github.com/anmol-patankar"
                >
                </MembersData>
                <MembersData
                    img={Service1}
                    heading = "Mohammad Saif"
                    text="https://github.com/saif5911"
                >
                </MembersData>
                <MembersData
                    img={Service1}
                    heading = "Priyam Aneja"
                    text="https://github.com/SimranMustafa"
                >
                </MembersData>
                <MembersData
                    img={Service1}
                    heading = "Swastik Midda"
                    text="https://github.com/SimranMustafa"
                >
                </MembersData>
                </div>
           
                
            </div>
        </div>
    );
}

export default Members;