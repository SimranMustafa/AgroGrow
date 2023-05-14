
function Pickleform(){
    return(
        <div className="from-container">
            <h1>Enter the following details:</h1>
            <form>
                <input placeholder="Nitrogen"></input>
                <input placeholder="Phosphorus"></input>
                <input placeholder="Potassium"></input>
                <input placeholder="Temperature"></input>
                <input placeholder="Humidity"></input>
                <input placeholder="ph"></input>
                <input placeholder="Rainfall"></input>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default Pickleform;