import logo from '../assets/logo.png'
import { BrowserRouter, Form, Link, Route, Router, Routes } from "react-router-dom"

function Menu() {
    return (
        <header className='col-lg-12 position-relative top-0 start-0'>
            < nav className="navbar navbar-light bg-light" >
                <div className="container-fluid " >
                    <a className="navbar-brand " href="#" >
                        <img src={logo} alt="Logo" width="50" height="50" className="d-inline align-text-center " />
                        <span className=''>MealReady</span>
                    </a>
                </div>
            </nav >
        </header >

    )
}

export default Menu