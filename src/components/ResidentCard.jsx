import { useState, useEffect } from "react"
import axios from "axios"

const ResidentCard = ({url}) => {

    const [character, setCharacter] = useState()

    useEffect(()=>{
        axios.get(url)
        .then(resp => setCharacter(resp.data))
        .catch(error => console.error(error))

    },[])

    return(
        <article>
            <header>
                <img src={character?.image} alt="" />
                <div>
                    <div className="circle"></div>
                    <span>{character?.status}</span>
                </div>
            </header>
            <section>
                <h3>{character?.name}</h3>
                <hr />
                <ul>
                    <li><span>Specie: </span><span>{character?.species}</span></li>
                    <li><span>Origin: </span><span>{character?.origin.name}</span></li>
                    <li><span>Episodes where appear: </span><span>{character?.episode.length}</span></li>
                </ul>
            </section>
        </article>
    )

}

export default ResidentCard