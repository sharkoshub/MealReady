import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

function FormModifPlats() {

    const [selectedPlat, setSelectedPlat] = useState();
    const param = useParams();

    function uploadAction(file, idPlat) {

        var formdata = new FormData();
        formdata.append("file", file);
        formdata.append("idPlat", idPlat);

        var requestOptions = {
            method: 'POST',
            body: formdata
        };

        fetch("https://mealready.herokuapp.com/uploadFile", requestOptions);
    }

    function handleSubmit(e) {
        e.preventDefault();

        const nom = e.target['nom'].value;
        const description = e.target['description'].value;
        const prixUnitaire = parseFloat(e.target['prixUnitaire'].value);
        const nbPlat = e.target['nbPlat'].value;
        const photo = e.target['photo'].files[0].name;

        //creates entity
        const urlUpdatePlat = `https://mealready.herokuapp.com/plats/${param.id}`;
        fetch(urlUpdatePlat, {
            "method": "PUT",
            "headers": {
                "content-type": "application/json",
                "accept": "application/json"
            },
            "body": JSON.stringify({
                "nom": nom,
                "description": description,
                "prixUnitaire": prixUnitaire,
                "nbPlat": nbPlat,
                "photo": photo
            })
        })
            .then(response => response.json())
            .then(response => {
                uploadAction(e.target['photo'].files[0], param.id);
                toast.success('Plat modifié!');
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        const url = `https://mealready.herokuapp.com/plats/${param.id}`;
        fetch(url).then(resp => resp.json())
            .then(resp => {
                setSelectedPlat(resp);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        < section className="offset-lg-2 col-lg-8 mb-5-lg" >
            <div className="row mt-5">
                <h2 className="">Modification de "{selectedPlat?.nom}"</h2>
                <form onSubmit={handleSubmit} encType="multipart/form-data" className="row was-validated">
                    <div className="col-lg-6 " >
                        <div>
                            <label htmlFor="nom" className="col-lg-12 mt-3">Nom</label>
                            <input type="text" id="nom" name="nom" className="form-control mt-2" placeholder="Nom du plat" defaultValue={selectedPlat?.nom} required />
                            <div className="invalid-feedback">Veuillez écrire le nom du plat</div>
                            <div className="valid-feedback">Validé</div>
                        </div>
                        <div>
                            <label htmlFor="description" className="col-lg-12 mt-3">Description</label>
                            <textarea id="description" name="description" className="form-control mt-2" placeholder="Description..." defaultValue={selectedPlat?.description} rows={5} maxLength={255} required></textarea>
                            <div className="invalid-feedback">Veuillez décrire le plat</div>
                            <div className="valid-feedback">Validé</div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div>
                            <label htmlFor="prixUnitaire" className="col-lg-12 mt-3">Prix unitaire (en €)</label>
                            <input type="number" id="prixUnitaire" name="prixUnitaire" min={0.0} step='0.01' className="form-control mt-2" placeholder="0.00" defaultValue={selectedPlat?.prixUnitaire} required />
                            <div className="invalid-feedback">Veuillez indiquer le prix unitaire en €</div>
                            <div className="valid-feedback">Validé</div>
                        </div>
                        <div>
                            <label htmlFor="nbPlat" className="col-lg-12 mt-3">Nombre de plats</label>
                            <input type="number" id="nbPlat" name="nbPlat" min={0.0} className="col-lg-3 form-control mt-2" placeholder="0" defaultValue={selectedPlat?.nbPlat} required />
                            <div className="invalid-feedback">Veuillez indiquer le nombre de plats</div>
                            <div className="valid-feedback">Validé</div>
                        </div>
                        <div>
                            <label htmlFor="photo" className="col-lg-12 mt-3">Choisir une photo de présentation</label>
                            <input type="file" id="photo" name="photo" accept="image/*" className="col-lg-12 form-control mt-2" required />
                            <div className="invalid-feedback">Choisissez une photo pour mettre en avant votre plat</div>
                            <div className="valid-feedback">Validé</div>
                        </div>
                    </div>
                    <button type="submit" className="offset-5 col-lg-2 btn-plat mt-5">Envoyer</button>


                </form >
            </div >
        </section >
    )
}

export default FormModifPlats