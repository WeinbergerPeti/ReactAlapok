import "./Konyv.css";

// const konyvObj={
//     cim: "Harry Potter",
//     szerzo: "J. K. Rowlings",
//     ar: 1500
// }


function Konyv(props)
{

    function kosarKezeles()
    {
        console.log(props.konyvObj);
        // app.js kosárkezelés hívása
        props.kosarKezeles(props.konyvObj)
    }

    return(
        <div className="konyv">
            <h2>{props.konyvObj.cim}</h2>
            <p>{props.konyvObj.szerzo}</p>
            <p>{props.konyvObj.ar}</p>
            {/* könyv komponenes kosárkezelésének a hívása */}
            <button onClick={kosarKezeles}>Kosárba</button>
        </div>
    );
}

export default Konyv;