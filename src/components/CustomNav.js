import { Link } from 'react-router-dom';
import '../styles/CustomNav.css';

function CustomNav() {
    return (
        <div className="CustomNav-btn col-lg-12  position-relative top-100 start-0 mt-5 " role="group" >
            <Link to="/plats" className='col-lg-4 CustomNav btn'>Mes Plats</Link>
            <Link to="/a-livrer" className='col-lg-4 CustomNav btn'>A livrer</Link>
            <Link to="/profil" className='col-lg-4 CustomNav btn'>Mon Profil</Link>
        </div >
    )
}

export default CustomNav
