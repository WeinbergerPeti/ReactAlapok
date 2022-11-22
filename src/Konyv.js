import "./Konyv.css";

// const konyvObj={
//     cim: "Harry Potter",
//     szerzo: "J. K. Rowlings",
//     ar: 1500
// }


function Konyv(props)
{

    function kosarba()
    {
        console.log(props.konyvObj);
        props.kosarKezelesFv(props.konyvObj)
    }

    return(
        <div className="konyv">
            <h2>{props.konyvObj.cim}</h2>
            <p>{props.konyvObj.szerzo}</p>
            <p>{props.konyvObj.ar}</p>
            <button onClick={kosarba}>Kosárba</button>
        </div>
    );
}

export default Konyv;