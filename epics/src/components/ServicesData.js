import "./ServicesStyles.css";

function ServicesData(props){
    return(
        <div className="s-card">
            <div className="s-image"> 
            <a href={props.pageUrl}>
            <img src={props.img} alt="image" />
            </a>
            </div>     
        <h4>{props.heading}</h4>
        <p>{props.text}</p>
        </div>
    );
}

export default ServicesData;