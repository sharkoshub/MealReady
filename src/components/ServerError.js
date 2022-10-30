import erreur500 from '../assets/erreur_serveur.jpg'
import '../styles/ServerError.css'

function ServerError() {
    return (
        <section className="offset-lg-2 col-lg-8 mb-5-lg">
            <div className="row mt-5">
                <img className="serverError" src={erreur500} width="50px" height={"50px"} />
                <h2 >Désolé les plats n'ont pu être récupérés. Veuillez vérifier si l'API est lancé.</h2>
            </div>
        </section>
    )
}

export default ServerError