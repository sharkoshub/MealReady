import { useEffect, useState } from "react"
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import Plat from "./Plat";
import erreur500 from '../assets/erreur_serveur.jpg'

import ServerError from "./ServerError";

function ListePlats() {

    const [plats, setPlats] = useState([]);

    // Chargement de la route API pour afficher la liste des plats
    useEffect(() => {
        const url = 'https://mealready.herokuapp.com/plats';
        fetch(url).then(resp => resp.json())
            .then(resp => {
                setPlats(resp);
            })
            .catch(err => {
                console.log(err);
                return (
                    <ServerError />
                )
            })
    }, [plats])

    return (
        <section className="offset-lg-2 col-lg-8 mb-5-lg">
            <div className="row mt-5">
                <h2 className="col-lg-8 ">Mes Plats</h2>
                <div className="col-lg-4">
                    <Link to="/add-plat">
                        <button type="button" className="btn-plat " >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                            </svg>
                            <span >Ajouter un plat</span>
                        </button>
                    </Link>
                </div>

            </div>
            {
                plats.map(plat => (
                    <Plat key={plat.id} plat={plat} />
                ))
            }
        </section >
    )
}

export default ListePlats