import './App.css';
import Konyv from './Konyv';
import {useState} from "react";
import Kosar from './Kosar';
import KosarModell from './model/KosarModel';

const konyvTomb =[
  {
    id:1,
    cim: "Harry Potter",
    szerzo: "J. K. Rowlings",
    ar: 1500
  },
  {
    id:2,
    cim: "Végzetes ígéret",
    szerzo: "Angela Marsons",
    ar: 2500
  },
  {
    id:3,
    cim: "Az élet ócska örömei",
    szerzo: "Vavyan Fable",
    ar: 1000
  }
]

function App() 
{

  // state - reprezentálják az oldal állapotát
  // befrissítik az oldal vonatkozó részét
  // let db=0;
  const [db, setDb] = useState(0);
  const [osszAr, setOsszAr] = useState(0);
  const [kosaram, setKosaram] = useState([]);
  const kosarModell= new KosarModell(kosaram);

  function kosarKezeles(adat)
  {
    // console.log(adat);
    // számoljuk meg, hogy hány könyvet tettünk a kosárba
    // db++;
    kosarModell.setDb(db)
    setDb(kosarModell.getDb());
    console.log(db);
    setOsszAr(osszAr+adat.ar);
    kosarModell.setKosar(adat)
    setKosaram(kosarModell.getKosar())
    console.log(kosaram);
  }

  function novel(adat)
  {
    console.log(adat);
  }

  function csokken(adat)
  {
    console.log(adat);
  }

  function torol(adat)
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
            return(<Konyv konyvObj={konyv} key={index} /* attribútum */ kosarKezeles={kosarKezeles} />)
          }
          )
        }

        {/*
        <Konyv konyvObj={konyvTomb[0]}/>
        <Konyv konyvObj={konyvTomb[1]}/>
        <Konyv konyvObj={konyvTomb[2]}/>
        */}
      </article>
      <section>
      <p>A könyvek darabszáma: {db}</p>
      <p>A könyvek ára: {osszAr}</p>
      <table>
        <thead>
        <tr>
              <th>Cím</th>
              <th>Szerző</th>
              <th>Ár</th>
              <th>Db</th>
              <th>+</th>
              <th>-</th>
              <th>Töröl</th>
          </tr>
        </thead>
        <tbody>
          {
            kosaram.map((elem, index) =>
            {
              return(
                <Kosar 
                  kosarObj={elem}
                  key={index}
                  novel={novel}
                  csokken={csokken}
                  torol={torol}
                />)
            })
          }
        </tbody>
      </table>
    </section>
    <footer>
      <p>Weinberger Péter</p>
    </footer>
    </div>
  );
}

export default App;
