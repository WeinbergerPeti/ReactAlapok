class KosarModell
{
    #kosar=[];
    #db
    #osszAr
    constructor(kosar)
    {
        this.#kosar=kosar;
        this.#db=0;
        this.#osszAr=0;
    }

    getKosar()
    {
        return this.#kosar;
    }

    setKosar(adat)
    {
        let azonosElem=this.#kosar.findIndex((elem)=>{
            return elem.id == adat.id
        })
        if (azonosElem>=0)
        {
            this.#kosar[azonosElem].db++;
        }
        else
        {
            this.#kosar.push(adat)
            this.#kosar[this.#kosar.length-1].db=1;
        }
        console.log(this.#kosar);
    }

    getDb()
    {
        return this.#db;
    }

    setDb(adat)
    {
        this.#db=adat+1;
    }

    kosarVizsgal(adat)
    {
        let i=0;
        while(i<this.#kosar.length && this.#kosar.length && adat.id!==this.#kosar[i].id)
        {
            i++;
            // console.log(db++);
        }
    }

}

export default KosarModell;