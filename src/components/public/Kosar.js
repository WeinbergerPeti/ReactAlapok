import "./Kosar.css";

function Kosar(props)
{
    function novel()
    {
        props.novel(props.kosarObj)
    }

    function csokken()
    {
        props.csokken(props.kosarObj)
    }

    function torol()
    {
        props.torol(props.kosarObj)
    }

    return(
        <tr>
            <td>{props.kosarObj.cim}</td>
            <td>{props.kosarObj.szerzo}</td>
            <td>{props.kosarObj.ar}</td>
            <td>{props.kosarObj.db}</td>
            <td><button onClick={novel}>+</button></td>
            <td><button onClick={csokken}>-</button></td>
            <td><button onClick={torol}>Töröl</button></td>
        </tr>     
    );
}

export default Kosar