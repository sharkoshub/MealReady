import { useEffect, useState } from "react"
import unknown from '../assets/image-1@2x.jpg'
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function Plat({ plat }) {

    const [option, setOption] = useState("hidden");
    const [photo, setPhoto] = useState(unknown);

    const host = "https://mealready.herokuapp.com";
    const pathImage = `${host}/upload`

    useEffect(() => {
        const url = `https://mealready.herokuapp.com/plats/${plat.id}`;
        fetch(url).then(resp => resp.json())
            .then(resp => {
                console.log();
                setPhoto(`${pathImage}/${resp.photo}`);
            })
            .catch(err => {
                console.log(err);
            })
    }, [photo])


    function openCloseOption() {
        if (option === "hidden") setOption("visible");
        else setOption("hidden");
    }

    function retirerPlat(idPlat) {
        // On retire le plat choisi
        // On récupère la nouvelle liste de plat et on met à jour le state "plats"
        console.log("retirer le plat " + idPlat);
        const url = `https://mealready.herokuapp.com/plats/${idPlat}`;
        fetch(url, {
            "method": "DELETE",
            "headers": {
                "x-rapidapi-key": process.env.API_KEY,
                "content-type": "application/json",
                "accept": "application/json"
            }
        }).then(resp => resp.json())
            .then(resp => {
                toast.success('Plat retiré!');
            });
    }

    return (
        <div key={`${plat.id}-${plat.nom}`} className="card mt-5" >
            <div className="row pt-5">
                <div className="col-lg-3">
                    <img src={photo} className="img-fluid rounded-start pt-5 pb-5" alt={`Présentation de ${plat.nom}`} />
                </div>
                <div className="col-lg-4">
                    <div className="card-body">
                        <h5 className="card-title">{plat.nom}</h5>
                        <p className="card-text">{plat.description}</p>
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="card-body">
                        <span>Nombre de plats:</span><p className="card-text">{plat.nbPlat}</p>
                        <span>Prix unitaire:</span><p className="card-text">{plat.prixUnitaire} €</p>
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="row pt-5">
                        <div className="col-lg-10">
                            <Link to={"/MealReady/update-plat/" + plat.id}>
                                <button type="button" className="btn-plat"  >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                    </svg>
                                    <span className="">  Modifier</span>
                                </button>
                            </Link>
                        </div>
                        <div className="col-lg-2">
                            <button type="button" className="btn btn-danger btn-delete" onClick={() => retirerPlat(plat.id)} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )

}

export default Plat