import './App.css';
import Konyv from './Konyv';

const konyvTomb =[
  {
    cim: "Harry Potter",
    szerzo: "J. K. Rowlings",
    ar: 1500
  },
  {
    cim: "Végzetes ígéret",
    szerzo: "Angela Marsons",
    ar: 2500
  },
  {
    cim: "Az élet ócska örömei",
    szerzo: "Vavyan Fable",
    ar: 1000
  }
]

function App() 
{

  function kosarKezeles(adat)
  {
    console.log(adat);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Könyváruház</h1>
      </header>
      <article>
        {
          konyvTomb.map( (konyv, index)=>{
            return(<Konyv konyvObj={konyv} key={index} kosarKezelesFv={kosarKezeles} />)
          }
          )
        }

        {/*
        <Konyv konyvObj={konyvTomb[0]}/>
        <Konyv konyvObj={konyvTomb[1]}/>
        <Konyv konyvObj={konyvTomb[2]}/>
        */}
      </article>
      <footer>
        <p>Weinberger Péter</p>
      </footer>
    </div>
  );
}

export default App;
