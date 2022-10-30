import maintenance from '../assets/maintenance.jpg'

function Maintenance() {
    return (
        <section className='offset-lg-2 col-lg-8 mb-5-lg'>
            <img className="offset-lg-4 col-lg-4" src={maintenance} alt="image de maintenance" />
            <h2 className="offset-lg-2 col-lg-8">Désolé cette page est en cours de maintenance</h2>
        </section>
    )
}

export default Maintenance